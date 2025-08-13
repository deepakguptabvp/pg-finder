import { MenuIcon, XIcon, HomeIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-md sticky top-0 z-10 bg-white md:h-20 lg:h-20 h-13 p-1.5 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center my-auto">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img
              src="/pg-1.png"
              alt="Company Logo"
              className="h-10 w-10  -mt-2"
            />

            <span className="ml-3 md:text-2xl font-bold text-gray-700 ">
              PG Finder
            </span>
          </Link>

          {/* Toggle Button for Mobile */}
          <div className="md:hidden">
            <button
              title="Explore"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:bg-gray-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-13 left-0 w-full bg-white md:static md:block md:w-auto`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-4 md:p-0 text-md font-medium">
              <Link
                to="/"
                onClick={() => isMenuOpen && toggleMobileMenu()}
                className="text-gray-700  hover:underline px-3 py-2"
              >
                Home
              </Link>
              <Link
                to="/alllistings"
                onClick={() => isMenuOpen && toggleMobileMenu()}
                className="text-gray-700  hover:underline px-3 py-2"
              >
                Listings
              </Link>
              <Link
                to="/about"
                onClick={() => isMenuOpen && toggleMobileMenu()}
                className="text-gray-700  hover:underline px-3 py-2"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => isMenuOpen && toggleMobileMenu()}
                className="text-gray-700  hover:underline px-3 py-2"
              >
                Contact
              </Link>

              <Link
                to="/login"
                onClick={() => isMenuOpen && toggleMobileMenu()}
                className="w-full  bg-indigo-600 text-white px-4 py-2  rounded-md transition hover:bg-indigo-700 cursor-pointer"
              >
                <div className="flex justify-center items-center">
                  <UserIcon className="h-6 w-6 mr-2" />
                  <span>Sign In</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
