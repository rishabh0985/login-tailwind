import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("Xyz");
  const onChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  return (
    <div className="flex h-screen bg-slate-500">
      <div className="flex justify-center items-center w-full">
        <span
          className="flex text-black items-center text-4xl shadow-lg p-5 bg-gray-700 rounded-lg"
          onChange={onChange}
        >
          Welcome {name} to this page!
        </span>
      </div>
    </div>
  );
};

export default Page;
