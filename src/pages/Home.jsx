import { useState } from "react";
import FeaturedListing from "../components/FeaturedListing";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import pgData from "../assets/pgData";

const Home = () => {
  const [searchByLocation, setSearchByLocation] = useState("");

  // Filter Pg's based on location
  const filteredPGs = pgData.filter((pg) =>
    pg.location.toLowerCase().includes(searchByLocation.toLowerCase())
  );

  return (
    <div>
      <HeroSection onSearch={setSearchByLocation} />
      <FeaturedListing listings={filteredPGs} />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
