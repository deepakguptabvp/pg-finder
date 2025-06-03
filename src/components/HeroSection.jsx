import { MapPinIcon, SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

    //  Run on every change in input
  useEffect(() => {
    if (inputValue.trim() === "") {
      onSearch(""); // reset search if input is empty
    }
  }, [inputValue]);

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  const roomOptions = [
    "Near Metro",
    "Female Only",
    "Male Only",
    "AC Rooms",
    "Wifi",
    "Included Food",
    "Non AC",
    "Laundry",
    "Power Backup",
    "Kitchen",
  ];

  return (
    <div className="relative bg-indigo-700 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-indigo-600 opacity-90"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          Find Your Perfect PG Accommodation
        </h1>
        <p className="mt-6 text-md text-center max-w-3xl mx-auto">
          Discover comfortable and affordable PG accommodations across the city.
          Your new home is just a search away.
        </p>

        <div className="mt-10 max-w-xl mx-auto bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-col md:flex-row">
            <div className="grow mb-4 md:mb-0 md:mr-4">
              <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-gray-50">
                <MapPinIcon className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter location"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="ml-2 grow focus:outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 rounded-xl px-6 py-2 transition flex items-center justify-center cursor-pointer"
              onClick={handleSearchClick}
            >
              <SearchIcon className="h-5 w-5  mr-2" />
              <span>Search</span>
            </button>
          </div>

          {/* Room Filter Options */}
          <div className="flex flex-wrap gap-3 mt-4">
            {roomOptions.map((items, index) => (
              <button
                key={index}
                className="bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm px-3 py-2 rounded-full transition cursor-pointer"
              >
                {items}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
