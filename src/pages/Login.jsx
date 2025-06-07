import React, { useState } from "react";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [otpSent, setOtpSent] = useState("");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white">
      {/* image div */}
      <div className="w-full md:w-3/5 flex items-center justify-center">
        <img
          src="/pg-login.jpg"
          alt="Image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* login div */}
      <div className="w-full md:w-2/5 flex flex-col items-center justify-center bg-white">
        <img
          src="/pg-1.png"
          alt="login"
          className="h-30 w-full object-contain rounded-2xl mb-3"
        />
        <h1 className="text-4xl md:text-3xl mb-1 font-bold mt- text-center">
          Welcome to Pg Finder.com
        </h1>
        <span className="text-lg font-semibold  ">
          Find your next stay with us !
        </span>

        {/* Otp login */}
        <div className="flex flex-col space-y-3 my-10 ">
          <div className="relative w-full max-w-sm">
            <span className="absolute left-0 h-full bg-indigo-600 text-white px-3 flex items-center rounded-l-full text-md">
              +91
            </span>
            <input
              type="tel"
              value={phoneNo}
              maxLength={10}
              onChange={(e) => {
                const digitsOnly = e.target.value.replace(/\D/g, "");
                setPhoneNo(digitsOnly);
              }}
              placeholder="Enter mobile number"
              className="pl-14 pr-4 py-2 w-full rounded-full border-2 border-indigo-500 focus:outline-none focus:border-indigo-700"
            />
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 py-2 mt-3 rounded-full dark:text-white cursor-pointer">
            Request Otp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
