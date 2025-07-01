import { useEffect } from "react";
import PgCard from "../components/PgCard";
import pgData from "../assets/pgData";

const AllListings = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 lg:px-8 ">
      <div className="md:py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pgData.length === 0 ? (
          <p>No PGs found for this location.</p>
        ) : (
          pgData.map((pg) => <PgCard key={pg.id} {...pg} />)
        )}
      </div>
    </div>
  );
};

export default AllListings;
