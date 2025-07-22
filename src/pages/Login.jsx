"use client"

import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Login = () => {
  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Helper to generate a 6-digit OTP
  const generateOtp = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  // function to handle Otp Sent
  const handleOtpSent = async () => {
    if (!phoneNo || phoneNo.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    setLoading(true);
    try {
      const otp = generateOtp();
      setGeneratedOtp(otp);
      setOtpSent(true);
      setTimeout(() => {
        toast.success(`Otp sent successfully. OTP: ${otp}`, {
          duration: 5000,
        });
      }, 3000);
    } catch (err) {
      toast.error("Something went wrong while sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // function to handle Verify OTP
  const handleVerifyOtp = async () => {
    if (!otp) {
      return toast.error("Please enter the otp.");
    }
    setLoading(true);
    try {
      if (otp === generatedOtp) {
        toast.success("Login Successfully.");
        navigate("/allListings");
      } else {
        toast.error("Invalid OTP.");
      }
    } catch (err) {
      toast.error("Something went wrong while verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  // function to handle Resend OTP
  const handleResendOtp = () => {
    handleOtpSent();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white">
      {/* image div */}
      <div className="w-full md:w-3/5 flex items-center justify-center ">
        <img
          src="/loginPG.png"
          alt="Image"
          className="object-cover h-80 md:h-155"
        />
      </div>

      {/* login div */}
      <div className="w-full md:w-2/5 flex flex-col items-center justify-center bg-white px-6">
        <img
          src="/pg-1.png"
          alt="login logo"
          className="h-30 w-full object-contain rounded-2xl mb-3"
        />
        <h1 className="text-4xl md:text-3xl mb-2 font-bold text-center">
          Welcome to Pg Finder.com
        </h1>
        <span className="text-gray-500 text-md font-semibold">
          Find your next stay with us !
        </span>

        {/* Otp login */}
        <div className="flex flex-col space-y-3 my-10">
          <div className="relative w-full max-w-sm">
            <span className="absolute left-0 h-full bg-indigo-600 text-white px-3 flex items-center rounded-l-full text-md">
              +91
            </span>
            <input
              type="tel"
              value={phoneNo}
              pattern="[0-9]{10}"
              maxLength={10}
              onChange={(e) => {
                const digitsOnly = e.target.value.replace(/\D/g, "");
                setPhoneNo(digitsOnly);
              }}
              placeholder="Enter mobile number"
              className="pl-16 pr-4 py-2 w-full rounded-full border-2 border-indigo-500 focus:outline-none focus:border-indigo-700"
            />
          </div>

          {otpSent ? (
            <>
              <input
                type="tel"
                value={otp}
                placeholder="Enter OTP"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
                className="pl-5 pr-4 py-2 w-full rounded-full border-2 border-indigo-500 focus:outline-none focus:border-indigo-700"
              />

              <button
                className="hover:underline cursor-pointer"
                onClick={handleResendOtp}
              >
                Resend OTP
              </button>

              <button
                type="button"
                disabled={loading}
                onClick={handleVerifyOtp}
                className="py-2 mt-3 rounded-full text-white font-serif bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
              >
                {loading ? "Verifying OTP ..." : "Verify OTP"}
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                disabled={loading}
                onClick={handleOtpSent}
                className="py-2 mt-3 rounded-full text-white font-serif bg-indigo-600 hover:bg-indigo-700  cursor-pointer"
              >
                {loading ? "Sending ..." : "Request OTP"}
              </button>

              {/* Sign up link*/}
              <div>
                Don't have an account.{" "}
                <Link to="/signup">
                  <strong className="text-indigo-600 cursor-pointer hover:underline">
                    Create an account
                  </strong>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
