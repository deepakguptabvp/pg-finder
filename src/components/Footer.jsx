import {
  HomeIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <HomeIcon className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">
                PG Finder
              </span>
            </div>
            <p className="mt-4 text-gray-300 text-sm">
              Finding your perfect PG accommodation has never been easier. We
              connect PG seekers with the best options across the city.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="#"
                title="Facebook"
                className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                title="Twitter"
                className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                title="Instagram"
                className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                title="Linkedin"
                className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/alllistings"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  Featured PGs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  List Your Property
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  Delhi
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  Noida
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  Gurgaon
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  Bangalore
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white  transition cursor-pointer  hover:underline"
                >
                  Pune
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 text-sm">
              <p>Sector-62</p>
              <p>Noida, U.P. 201309</p>
              <p className="mt-3">Email: info@pgfinder.com</p>
              <p>Phone: +91 9876543210</p>
            </address>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} PG Finder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
