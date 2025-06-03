import React from "react";

const HeroSection = () => {
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
      </div>
    </div>
  );
};

export default HeroSection;
