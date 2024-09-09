import React from "react";
import { Link } from "react-router-dom";

function Sign() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 flex-col">
      <div className="m-2 bg-slate-400 flex items-center justify-center p-6 w-80 shadow-lg rounded-md flex-col ">
        <h1 className="text-stone-600 text-2xl font-serif text-center mb-6 underline ">
          Enter-Your-Details
        </h1>
        <div className="flex gap-2 flex-col ">
          <label className="text-stone-600 text-xl font-serif flex-col flex">
            Email
          </label>
          <input
            placeholder="Enter your Email"
            minLength={10}
            maxLength={20}
            className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10 flex "
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
          <label className="text-stone-600 text-xl font-serif flex-col flex">
            Re-EnterPassword
          </label>
          <input
            placeholder="Enter Your Password"
            alt="password"
            minLength={8}
            maxLength={16}
            className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10"
          />
          <label className="text-stone-600 text-xl font-serif flex-col flex">
            UserName
          </label>
          <input
            placeholder="Enter Your UserName"
            alt="UserName"
            minLength={5}
            maxLength={15}
            className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10"
          />
          <Link to="./Login">
            <button className="bg-slate-600 text-stone-100 mt-10 h-10 w-20 text-sm flex justify-center items-center ml-14 ">
              Login Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sign;
