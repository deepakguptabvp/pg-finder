import {
  MapPinIcon,
  StarIcon,
  WifiIcon,
  ShowerHeadIcon,
  BedIcon,
  SoupIcon,
  WashingMachineIcon,
  SnowflakeIcon,
  DumbbellIcon,
  PlugIcon,
  TvIcon,
  ParkingCircleIcon,
  ShieldCheckIcon,
  FanIcon,
  ThermometerIcon,
  UtensilsIcon,
  KeyRoundIcon,
  LockIcon,
} from "lucide-react";

const PgCard = ({
  name,
  location,
  price,
  rating,
  imageUrl,
  type,
  amenities,
}) => {
  const amenityIcons = {
    Wifi: WifiIcon,
    "Attached Bathroom": ShowerHeadIcon,
    Furnished: BedIcon,
    "Food Included": SoupIcon,
    Laundry: WashingMachineIcon,
    AC: SnowflakeIcon,
    "Non AC": FanIcon,
    "Power Backup": PlugIcon,
    Gym: DumbbellIcon,
    Television: TvIcon,
    Parking: ParkingCircleIcon,
    Security: ShieldCheckIcon,
    Heating: ThermometerIcon,
    Kitchen: UtensilsIcon,
    "Private Room": KeyRoundIcon,
    "Lockable Storage": LockIcon,
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      {/* Image and Type  */}
      <div className="relative h-48">
        <img src={imageUrl} alt={name} className="w-full object-cover h-full" />
        <div className="absolute top-3 left-3 bg-indigo-600 text-white px-2 py-1 text-xs rounded">
          {type}
        </div>
      </div>

      {/* Name and rating */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold  text-gray-800">{name}</h3>
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium text-gray-700"> {rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex mt-2 items-center text-gray-600">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Amenities */}
        <div className="mt-4 flex flex-wrap gap-2">
          {amenities.map((amenity, index) => {
            const Icon = amenityIcons[amenity];
            return (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full flex items-center gap-1"
              >
                {Icon && <Icon className="inline h-3 w-3" />}
                {amenity}
              </span>
            );
          })}
        </div>

        {/* Rent/month & view details */}
        <div className="mt-5 flex justify-between items-center">
            <div>
                <span className="text-lg text-indigo-600 font-bold">  ₹{price}</span>
                <span className="text-sm text-gray-500">  /month</span>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-4 rounded text-sm transition">
                View Details
            </button>
        </div>
      </div>
    </div>
  );
};

export default PgCard;
