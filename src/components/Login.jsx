import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 flex-col">
      <div className="m-2 bg-slate-400 flex items-center justify-center p-6 w-96 shadow-lg rounded-md flex-col">
        <h1 className="text-stone-600 text-2xl font-serif text-center mb-6 underline">
          Log in With
        </h1>
        <div className="flex gap-2 flex-col ">
          <label className="text-stone-600 text-xl font-serif flex-col flex">
            Email
          </label>
          <input
            placeholder="Enter your Email"
            minLength={10}
            maxLength={20}
            className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10 flex"
          />
          <label className="text-stone-600 text-xl font-serif flex-col flex">
            Password
          </label>
          <input
            placeholder="Enter Your Password"
            alt="password"
            minLength={8}
            maxLength={16}
            className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10"
          />
        </div>
        <Link to="/Page">
          <button className="bg-slate-600 text-stone-100 p-2 mt-10 rounded-md w-40 flex items-center justify-center">
            Log in
          </button>
        </Link>
      </div>
      <div className="flex flex-row gap-1">
        <h1 className="text-white">Don't have an account:{" > "}</h1>

        <Link to="/Sign" className="underline text-black">
          SignIn
        </Link>
      </div>
    </div>
  );
};

export default Login;
