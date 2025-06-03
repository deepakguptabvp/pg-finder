import FeaturedListing from "../components/FeaturedListing";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedListing/>
      <HowItWorks/>
      <Testimonials/>
    </div>

  );
};

export default Home;
