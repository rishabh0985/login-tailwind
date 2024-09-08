import React from "react";

const Login = () => {
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/brands.min.css"
    integrity="sha512-EJp8vMVhYl7tBFE2rgNGb//drnr1+6XKMvTyamMS34YwOEFohhWkGq13tPWnK0FbjSS6D8YoA3n3bZmb3KiUYA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />;
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500 flex-col">
      <div className="m-2 bg-slate-400  flex items-center justify-center p-6 w-96 shadow-lg rounded-md  flex-col">
        <h1 className="text-stone-600 text-2xl font-serif text-center mb-8 underline">
          Log in With
        </h1>
        <div className="flex gap-2 flex-col ">
          <label className="text-stone-600 text-xl font-serif flex-col flex">
            Email
          </label>
          <input
            placeholder="Enter your Email"
            pattern="/d"
            minLength={10}
            maxLength={20}
            className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10"
          />
          <label className="text-stone-600 text-xl font-serif flex-col flex">
            Password
          </label>
          <input
            placeholder="Enter Your Password"
            alt="password"
            className="border w-full text-base px-2 py-1 focus:ring-0 focus:border-gray-600 rounded-md h-10"
          />
        </div>
        <button className="bg-slate-600 text-stone-100 p-2 mt-4 rounded-md w-40 flex items-center justify-center mt-10">
          Log in
        </button>
      </div>
      <div className="flex flex-row gap-1">
        <h1 className="text-white">Don't have account: </h1>
        <label className="underline">SignIn</label>
      </div>
    </div>
  );
};

export default Login;
