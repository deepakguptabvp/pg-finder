import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">About PG Finder</h1>

      <p className="text-lg mb-6">
        <strong>PG Finder</strong> is your trusted platform for discovering comfortable and affordable PG accommodations across the city. Whether you're a student, working professional, or someone relocating to a new place — we make it easy to find your next home, stress-free.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Why PG Finder?</h2>
          <ul className="list-decimal  ml-5 space-y-2 text-gray-700">
            <li>Verified PG Listings with detailed info</li>
            <li>Map-based Search to find nearby options</li>
            <li>Filter by rent, gender, amenities, and more</li>
            <li>Responsive design for mobile & desktop</li>
            <li>Owner login to manage PGs (coming soon)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Our Mission</h2>
          <p className="text-gray-700">
            We're on a mission to simplify the PG-hunting process by building a centralized, transparent, and easy-to-use platform. No more scrolling through random groups or dealing with brokers. Just smart filters, verified data, and peace of mind.
          </p>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-medium mb-2 text-indigo-700">Made with ❤️ by Deepak Gupta</h3>
        <p className="text-gray-700">
          This project is part of a personal mission to solve real-life problems using modern frontend technologies like React, TailwindCSS, and Google Maps API. It’s designed to be scalable, clean, and practical.
        </p>
      </div>
    </div>
  );
};

export default About;
