import React from "react";
import logo from "../../images/logo.png";

const ComingSoon = () => {
  return (
    <div className="bg-green-800 w-full h-full flex justify-center items-center">
      <div className="w-1/2 text-center">
        <div className="text-center my-4">
          <img src={logo} alt="logo" className="w-1/2 my-0 mx-auto" />
        </div>
        <div className="text-4xl text-white">Coming Soon!</div>
      </div>
    </div>
  );
};

export default ComingSoon;
