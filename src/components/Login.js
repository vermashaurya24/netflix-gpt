import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorState, setErrorState] = useState({
    name: false,
    email: false,
    password: false,
  });

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitClick = () => {
    const errorResponse = checkValidateData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorState(errorResponse);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/NP-en-20241111-TRIFECTA-perspective_bf5889d0-60a0-48cd-ab7a-cd61c9650f89_large.jpg"
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
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className={`p-4 my-4 w-full bg-black rounded-lg bg-opacity-50 border ${
                errorState.name ? "border-red-600" : "border-white"
              }`}
            />
            {errorState.name && (
              <p className="font-bold text-red-500 mx-4">Name can not be empty</p>
            )}
          </div>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className={`p-4 my-4 w-full bg-black rounded-lg bg-opacity-50 border ${
            errorState.email ? "border-red-600" : "border-white"
          }`}
        />
        {errorState.email && (
          <p className="font-bold text-red-500 mx-4">Email is not valid</p>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className={`p-4 my-4 w-full bg-black rounded-lg bg-opacity-50 border ${
            errorState.password ? "border-red-600" : "border-white"
          }`}
        />
        {errorState.password && (
          <p className="font-bold text-red-500 mx-4">Password is not valid</p>
        )}
        <button
          className="p-4 my-6 bg-red-600 w-full rounded-lg"
          onClick={handleSubmitClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-400">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="hover:underline text-white"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now." : "Sign In."}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
