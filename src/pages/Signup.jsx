import { Link } from "lucide-react";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-white md:px-10">
      {/* Details component */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center md:px-24 ">
        <div className="space-y-3 text-center mb-4">
          <h1 className="flex text-center justify-center">
            <Link />
          </h1>
          <h1 className="text-5xl font-bold font-serif "> Sign up</h1>
          <span className="text-gray-500 text-sm font-semibold">
            Welcome to PG Finder. Let's create an account.
          </span>
        </div>

        {/* Google login button */}
        <button className="flex border border-gray-600 rounded-xl px-4 py-2 cursor-pointer hover:border-emerald-600 shadow-xl">
          <img src="./google-icon.png" alt="Google Icon" className="h-6 mr-2" />
          Login with Google
        </button>

        {/* User Details */}
        <div className="flex flex-col text-left space-y-2 px-8 py-4">
          <div>
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full md:w-80 rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-indigo-700"
            />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-80 rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-indigo-700"
            />
          </div>
          <div>
            <label htmlFor="">Phone No</label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="w-full md:w-80 rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-indigo-700"
            />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              className="w-full md:w-80 rounded-xl px-4 py-2 border border-gray-400 focus:outline-none focus:border-indigo-700"
            />
          </div>
          <button
            type="button"
            className="py-2 mt-6 md:w-80 text-lg font-serif  rounded-full text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
          >
            Sign up
          </button>
        </div>
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
