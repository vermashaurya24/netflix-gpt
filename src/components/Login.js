import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/NP-en-20241111-TRIFECTA-perspective_bf5889d0-60a0-48cd-ab7a-cd61c9650f89_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute w-4/12 p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-black rounded-lg bg-opacity-85 border border-white"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black rounded-lg bg-opacity-85 border border-white"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg">
          Sign In
        </button>
        <p className="text-gray-400">
          New to Netflix?{" "}
          <button type="button" className="hover:underline text-white" onClick={toggleSignInForm}>Sign up now.</button>
        </p>
      </form>
    </div>
  );
};

export default Login;
