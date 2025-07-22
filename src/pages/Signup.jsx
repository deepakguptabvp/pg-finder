"use client"

import { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleSubmit = () => {
    if (!fullName || !email || !phone || city) {
      toast.error("Please complete all fields.");
      return;
    }
    toast.success("User details ssaved successfully.");
  };

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white md:px-10">
      {/* Details component */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:px-24 ">
        <div className="space-y-3 text-center mb-4">
          {/* <h1 className="flex text-center justify-center">
            <Link />
          </h1> */}
          <h1 className="text-5xl font-bold font-serif "> Sign up</h1>
          <span className="text-gray-500 text-sm font-semibold">
            Welcome to PG Finder. Let's create an account.
          </span>
        </div>

        {/* Google login button */}
        <button className="flex border border-gray-600 rounded-xl px-4 py-2 cursor-pointer hover:border-emerald-600 hover:shadow-xl">
          <img src="./google-icon.png" alt="Google Icon" className="h-6 mr-2" />
          Login with Google
        </button>

        {/* User Details */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col text-left space-y-2 px-8 py-4">
            <div>
              <label
                htmlFor="fullName"
                className="block mb-1 font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full md:w-80 rounded-xl px-4 py-2 border border-gray-400 focus:ring-1 focus:outline-none focus:ring-indigo-700"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full md:w-80 rounded-xl px-4 py-2 border border-gray-400 focus:ring-1 focus:outline-none focus:ring-indigo-700"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-1 font-medium text-gray-700"
              >
                Phone No
              </label>
              <input
                type="tel"
                maxLength={10}
                pattern="[0-9]{10}"
                value={formData.phone}
                onChange={(e) => {
                  const digitsOnly = e.target.value.replace(/\D/g, "");
                  setPhone(digitsOnly);
                  handleChange;
                }}
                placeholder="Enter your number"
                className="w-full md:w-80 rounded-xl px-4 py-2 border border-gray-400 focus:ring-1 focus:outline-none focus:ring-indigo-700"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block mb-1 font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="w-full md:w-80 rounded-xl px-4 py-2 border border-gray-400 focus:ring-1 focus:outline-none focus:ring-indigo-700"
              />
            </div>
            <button
              type="submit"
              className="py-2 mt-6 md:w-80 text-lg font-serif  rounded-full text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>

      {/* image component*/}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img
          src="/signup-image.png"
          alt="Sign-up Image"
          className="object-cover h-80 md:h-150 md:p-18"
        />
      </div>
    </div>
  );
};

export default Signup;
