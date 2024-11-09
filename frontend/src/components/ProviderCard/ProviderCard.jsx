import React,{useState,useEffect} from "react";
import {
  Calendar,
  Building,
  MapPin,
  Package,
  AlertTriangle,
  Clock,
} from "lucide-react";
import calculateDistance from "../../functions/CalculateDistance"
const ProviderCard = ({
  event,
  tag,
  price
}) => {
  const formattedStartTime = new Date(event.startTime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedEndTime = new Date(event.endTime).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            la: position.coords.latitude,
            lo: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation not supported");
    }
  }, []);
  const answer =
    location &&
    event.coordinates&&calculateDistance(
      location.la,
      location.lo,
      event.coordinates.lat,
      event.coordinates.lon
    );
  return (
    <div className="max-w-sm w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-6">
          <div className="flex items-center justify-between">
            <h2 className="md:text-xl text-md font-semibold text-white truncate">
              {event.name}
            </h2>
            <span className="bg-emerald-500 bg-opacity-30 text-white text-xs px-3 py-1 rounded-full border border-white border-opacity-20">
              Available
            </span>
          </div>
        </div>
        <div className="p-5 space-y-2">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-200">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">{`${event.Date}`}</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-200">
              <Building className="w-5 h-5" />
              <span className="text-sm">{`${event.Venue}`}</span>
            </div>

            <div className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-200">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">{`${Math.round(answer)}`}km</span>
            </div>
          </div>
          <div className="border-t border-gray-100" />
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Quantity</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {`${event.Quantity}`}
                  </p>
                </div>
              </div>
            </div>
            {price && (
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <Package className="w-5 h-5" />
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Price
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {`${price}`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Expected Wastage
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {`${event.expectedWastage}`}%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Time</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {`${formattedStartTime}`} - {`${formattedEndTime}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="w-full bg-emerald-600 text-white py-2 rounded-lg font-medium 
            hover:bg-emerald-700 transition-colors duration-200 focus:outline-none"
          >
            {`${tag}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProviderCard;
