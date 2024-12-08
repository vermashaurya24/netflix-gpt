import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BG_URL } from "../utils/constants";
import { lang } from "../utils/languageConstants";

import Header from "./Header";

const Login = () => {
  const navigate = useNavigate();
  const currentLanguage = useSelector(state => state.config?.language);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorState, setErrorState] = useState({
    name: false,
    email: false,
    password: false,
    generic: false,
  });

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitClick = async () => {
    const errorResponse = checkValidateData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorState(errorResponse);

    if (errorResponse.name || errorResponse.email || errorResponse.password) {
      return;
    }

    try {
      if (!isSignInForm) {
        await createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        );
        await updateProfile(
          auth.currentUser, 
          {
            displayName: name?.current?.value
          }
        );
        navigate("/browse");
      } else {
        await signInWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value
        );
        navigate("/browse");
      }
      } catch {
      setErrorState((prev) => {
        return { ...prev, generic: true };
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-4/12 p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? lang[currentLanguage]?.signIn.buttonText : lang[currentLanguage]?.signUp.buttonText}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              ref={name}
              type="text"
              placeholder={lang[currentLanguage].nameFieldText}
              className={`p-4 my-4 w-full bg-black rounded-lg bg-opacity-50 border ${
                errorState.name || errorState.generic ? "border-red-600" : "border-white"
              }`}
            />
            {errorState.name && (
              <p className="font-bold text-red-500 mx-4">
                {lang[currentLanguage]?.nameErrorText}
              </p>
            )}
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder={lang[currentLanguage]?.emailFieldText}
          className={`p-4 my-4 w-full bg-black rounded-lg bg-opacity-50 border ${
            errorState.email || errorState.generic ? "border-red-600" : "border-white"
          }`}
        />
        {errorState.email && (
          <p className="font-bold text-red-500 mx-4">{lang[currentLanguage]?.emailErrorText}</p>
        )}
        <input
          ref={password}
          type="password"
          placeholder={lang[currentLanguage]?.passwordFieldText}
          className={`p-4 my-4 w-full bg-black rounded-lg bg-opacity-50 border ${
            errorState.password || errorState.generic ? "border-red-600" : "border-white"
          }`}
        />
        {errorState.password && (
          <p className="font-bold text-red-500 mx-4">{lang[currentLanguage]?.passwordErrorText}</p>
        )}
        {errorState.generic && (isSignInForm ? (
          <p className="font-bold text-red-500 mx-4">{lang[currentLanguage]?.signIn.genericErrorText}</p>
        ) : (
          <p className="font-bold text-red-500 mx-4">{lang[currentLanguage]?.signUp.genericErrorText}</p>
        ))}
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleSubmitClick}
        >
          {isSignInForm ? lang[currentLanguage]?.signIn.buttonText : lang[currentLanguage]?.signUp.buttonText}
        </button>
        <p className="text-gray-400">
          {isSignInForm ? lang[currentLanguage]?.signIn.bottomText : lang[currentLanguage]?.signUp.bottomText}{" "}
          <button
            type="button"
            className="hover:underline text-white"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? lang[currentLanguage]?.signUp.buttonText : lang[currentLanguage]?.signIn.buttonText}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
