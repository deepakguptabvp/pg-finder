import PgCard from "./PgCard";

const FeaturedListing = ({ listings }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured PG Accommodations
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of the best PG accommodations
            available right now.
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {listings.length === 0 ? (
            <p>No PGs found for this location.</p>
          ) : (
            listings.map((pg) => <PgCard key={pg.id} {...pg} />)
          )}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md transition">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;
