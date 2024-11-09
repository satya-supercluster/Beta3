import React, { useState, useEffect } from "react";

const producers = [
  {
    id: 1,
    name: "Farm Fresh Produce",
    location: "123 Farm Road, Rural County",
    coordinates: { lat: 40.7128, lon: -74.006 }, // Example coordinates
    products: ["Vegetables", "Fruits"],
    image: "/api/placeholder/100/100",
  },
  {
    id: 2,
    name: "Organic Dairy",
    location: "456 Dairy Lane, Countryside",
    coordinates: { lat: 40.7589, lon: -73.9851 }, // Example coordinates
    products: ["Milk", "Cheese", "Yogurt"],
    image: "/api/placeholder/100/100",
  },
  // Add more producers as needed
];

const ProducerCards = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState("");
  const [distances, setDistances] = useState({});
  const [loading, setLoading] = useState(true);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    // Convert to meters for more precise local distances
    return distance * 1000;
  };

  const getUserLocation = () => {
    setLoading(true);
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setLoading(false);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Location permission denied");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information unavailable");
            break;
          case error.TIMEOUT:
            setLocationError("Location request timed out");
            break;
          default:
            setLocationError("An unknown error occurred");
        }
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  };

  const updateDistances = () => {
    if (!userLocation) return;

    const newDistances = {};
    producers.forEach((producer) => {
      const distance = calculateDistance(
        userLocation.lat,
        userLocation.lon,
        producer.coordinates.lat,
        producer.coordinates.lon
      );
      newDistances[producer.id] = distance;
    });
    setDistances(newDistances);
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (userLocation) {
      updateDistances();
    }
  }, [userLocation]);

  const formatDistance = (meters) => {
    if (meters < 1000) {
      return `${Math.round(meters)} meters`;
    }
    return `${(meters / 1000).toFixed(2)} km`;
  };

  const refreshLocation = () => {
    setLoading(true);
    getUserLocation();
  };

  return (
    <div className="container mx-auto p-4">
      {/* Location Status Header */}
      <div className="mb-6 bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Your Location
            </h2>
            {userLocation ? (
              <p className="text-sm text-gray-600">
                Lat: {userLocation.lat.toFixed(6)}, Lon:{" "}
                {userLocation.lon.toFixed(6)}
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Determining your location...
              </p>
            )}
          </div>
          <button
            onClick={refreshLocation}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 transition-colors duration-200"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Loading...
              </span>
            ) : (
              "Refresh Location"
            )}
          </button>
        </div>
        {locationError && (
          <div className="mt-2 text-red-500 text-sm">{locationError}</div>
        )}
      </div>

      {/* Producer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {producers.map((producer) => (
          <div
            key={producer.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="relative">
              <img
                src={producer.image}
                alt={producer.name}
                className="w-full h-48 object-cover"
              />
              {distances[producer.id] && (
                <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-3 py-1 rounded-full text-sm">
                  {formatDistance(distances[producer.id])}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {producer.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{producer.location}</p>
              <div className="mt-2">
                {producer.products.map((product, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-2 mb-2"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProducerCards;
