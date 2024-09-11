import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Sign() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [name, setName] = useState("");

  const onChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowRePassword = () => {
    setShowRePassword(!showRePassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 flex-col">
      <div className="m-2 bg-slate-400 flex items-center justify-center p-6 w-80 shadow-lg rounded-md flex-col">
        <h1 className="text-stone-600 text-2xl font-serif text-center mb-6 underline">
          Enter-Your-Details
        </h1>
        <div className="flex gap-2 flex-col">
          <label className="text-stone-600 text-xl font-serif flex-col flex">
            Email
          </label>
          <input
            placeholder="Enter your Email"
            minLength={10}
            maxLength={20}
            onChange={onChange}
            value={name}
            className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10"
          />
          <div className="relative w-full">
            <label className="text-stone-600 text-xl font-serif flex-col flex">
              Password
            </label>
            <div className="relative">
              <input
                placeholder="Enter Your Password"
                alt="password"
                type={showPassword ? "text" : "password"}
                minLength={8}
                maxLength={16}
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10 pr-10"
              />
              <span
                onClick={toggleShowPassword}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showPassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </span>
            </div>
          </div>
          <div className="relative w-full">
            <label className="text-stone-600 text-xl font-serif flex-col flex">
              Re-Enter Password
            </label>
            <div className="relative">
              <input
                placeholder="Re-enter Your Password"
                type={showRePassword ? "text" : "password"}
                alt="password"
                minLength={8}
                maxLength={16}
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10 pr-10"
              />
              <span
                onClick={toggleShowRePassword}
                className="absolute right-3 top-3 cursor-pointer"
              >
                {showRePassword ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </span>
            </div>
          </div>
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
            <button className="bg-slate-600 text-stone-100 mt-10 h-10 w-28 text-sm flex justify-center items-center ml-14 rounded-lg hover:bg-green-300 hover:text-black">
              Login Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sign;
