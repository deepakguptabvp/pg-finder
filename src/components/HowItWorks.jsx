import { SearchIcon, HomeIcon, MessageCircleIcon } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            How PG Finder Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Finding your ideal PG accommodation is easy with our simple
            three-step process
          </p>
        </div>


          {/* Search - Visit - Connect */}
        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3 ">

          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <SearchIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Search</h3>
            <p className="mt-2 text-base text-gray-600">
              Use our powerful search filters to find PGs that match your
              requirements for location, budget, and amenities.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <HomeIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Visit</h3>
            <p className="mt-2 text-base text-gray-600">
              Schedule visits to your shortlisted PGs or take virtual tours to
              find the perfect match for your needs.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center">
              <MessageCircleIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-gray-900">Connect</h3>
            <p className="mt-2 text-base text-gray-600">
              Connect directly with PG owners or managers to finalize your
              booking and move into your new home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
