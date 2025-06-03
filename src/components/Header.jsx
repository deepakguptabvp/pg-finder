import { MenuIcon, XIcon, HomeIcon, UserIcon, User2Icon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-md sticky top-0 z-10 bg-white md:h-20 lg:h-16 h-13 p-1.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo Section */}
          <div className="flex items-center">
            <HomeIcon className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-indigo-600">
              PG Finder
            </span>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="md:hidden">
            <button
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
            } absolute top-16 left-0 w-full bg-white md:static md:block md:w-auto`}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-4 md:p-0 text-md font-medium">
              <Link
                to="/home"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2"
              >
                Home
              </Link>
              <Link
                to="/explore"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2"
              >
                Explore
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2"
              >
                Contact
              </Link>

              <button className="w-full mt-2  bg-indigo-600 text-white px-4 py-2  rounded-md transition hover:bg-indigo-700">
                <div className="flex justify-center items-center">
                  <UserIcon className="h-6 w-6 mr-2" />
                  <span>Sign In</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
