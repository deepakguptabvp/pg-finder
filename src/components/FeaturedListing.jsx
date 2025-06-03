import PgCard from "./PgCard";

const FeaturedListing = () => {
  const pgListings = [
    {
      id: "1",
      name: "Sunshine PG",
      location: "Koramangala, Bangalore",
      price: 25000,
      rating: 4.5,
      imageUrl:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2070&q=80",
      type: "Female",
      amenities: ["Wifi", "Furnished", "Attached Bathroom"],
    },
    {
      id: "2",
      name: "Green Valley PG",
      location: "HSR Layout, Bangalore",
      price: 27000,
      rating: 4.2,
      imageUrl:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=2070&q=80",
      type: "Male",
      amenities: ["Wifi", "Food Included", "Power Backup"],
    },
    {
      id: "3",
      name: "City Center PG",
      location: "Indiranagar, Bangalore",
      price: 35000,
      rating: 4.7,
      imageUrl:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2070&q=80",
      type: "Co-ed",
      amenities: ["AC", "Furnished", "Gym"],
    },
    {
      id: "4",
      name: "Urban Nest",
      location: "Whitefield, Bangalore",
      price: 20500,
      rating: 4.0,
      imageUrl:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2070&q=80",
      type: "Female",
      amenities: ["Laundry", "Wifi", "Food Included"],
    },
    {
      id: "5",
      name: "Shahi Boys",
      location: "Mayur Vihar, Delhi",
      price: 8500,
      rating: 3.9,
      imageUrl:
        "https://alexandro.in/image/delhi/covie-east-of-kailash-52/1.jpg",
      type: "Male",
      amenities: ["Laundry", "Wifi", "Food Included", "AC", "Furnished"],
    },
    {
      id: "6",
      name: "Girls Hostel",
      location: "Laxmi Nagar, Delhi",
      price: 6500,
      rating: 4.3,
      imageUrl:
        "https://files.yappe.in/place/small/orion-hostels-best-pg-in-north-campus-delhi-university-4656209.webp",
      type: "Female",
      amenities: ["Laundry", "Wifi", "Food Included", "Non AC"],
    },
    {
      id: "7",
      name: "Deluxe Stay",
      location: "Hadapsar, Pune",
      price: 13000,
      rating: 4.4,
      imageUrl:
        "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/v1580289732/Website/CMS-Uploads/j8hjb1qhzcbnsmnude3m.jpg",
      type: "Co-ed",
      amenities: ["Furnished", "Attached Bathroom", "Power Backup", "Gym"],
    },
    {
      id: "8",
      name: "Comfort PG",
      location: "Gachibowli, Hyderabad",
      price: 11000,
      rating: 4.1,
      imageUrl:
        "https://asset-cdn.stanzaliving.com/stanza-living/image/upload/v1580375346/Website/CMS-Uploads/o4bf5h8z6cxtgnb6hvxj.jpg",
      type: "Male",
      amenities: ["Wifi", "AC", "Laundry", "Food Included"],
    },
    {
      id: "9",
      name: "Smart Living",
      location: "Sector 62, Noida",
      price: 9000,
      rating: 4.0,
      imageUrl:
        "https://img.cofynd.com/images/original/938b5bac0b64a441513fd9038753a26059ff0fce.jpg",
      type: "Co-ed",
      amenities: ["Attached Bathroom", "Gym", "Power Backup"],
    },
    {
      id: "10",
      name: "Elite PG",
      location: "Baner, Pune",
      price: 16000,
      rating: 4.5,
      imageUrl:
        "https://img.cofynd.com/images/latest_images_2024/39257be6bf339917f449ee7d18bb9862b5750675.webp",
      type: "Female",
      amenities: ["Wifi", "AC", "Furnished", "Gym", "Laundry"],
    },
    {
      id: "11",
      name: "NestAway CoLiving",
      location: "Electronic City, Bangalore",
      price: 9800,
      rating: 4.2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQMeyZf_Ij4SmfdnUkYK9VSzZJJZ4yrvwabw&s",
      type: "Male",
      amenities: ["Food Included", "Power Backup", "Laundry"],
    },
    {
      id: "12",
      name: "Oasis PG",
      location: "Viman Nagar, Pune",
      price: 14000,
      rating: 4.3,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnbeme0XT1ZRLqzfZ6qwVLiy65zHTM7rUQng&s",
      type: "Female",
      amenities: ["Wifi", "Furnished", "Attached Bathroom"],
    },
    {
      id: "13",
      name: "Hive Hostel",
      location: "Powai, Mumbai",
      price: 15500,
      rating: 4.6,
      imageUrl:
        "https://cupliv.com/images/mumbai/tribe-ville-parle/1.jpg",
      type: "Co-ed",
      amenities: ["Laundry", "Gym", "Power Backup", "Wifi"],
    },
    {
      id: "14",
      name: "Greenleaf PG",
      location: "Saket, Delhi",
      price: 7800,
      rating: 3.8,
      imageUrl:
        "https://websiteupload.s3.ap-south-1.amazonaws.com/media/2024/07/66115bc1d6be29.webp",
      type: "Female",
      amenities: ["Food Included", "Non AC", "Furnished"],
    },
    {
      id: "15",
      name: "Techies PG",
      location: "BTM Layout, Bangalore",
      price: 8900,
      rating: 4.1,
      imageUrl:
        "https://www.thehivehostels.com/uploads/hostel/1718886244_0d6ccbcba47025f91e06.png",
      type: "Male",
      amenities: ["AC", "Power Backup", "Laundry"],
    },
  ];

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
          {pgListings.map((pg) => (
            <PgCard key={pg.id} {...pg} />
          ))}
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
