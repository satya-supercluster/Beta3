import React, { useState } from "react";
import { MapPin, AlertCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
const AddEvent = ({ showForm, setShowForm }) => {
  const { auth, token } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    venue: "",
    quantity: "",
    expectedWastage: 0,
    coordinates: {
      lat: "",
      lon: "",
    },
    startTime: "",
    endTime: "",
  });

  const [locationError, setLocationError] = useState("");
  const [isLocating, setIsLocating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lat" || name === "lon") {
      setFormData((prev) => ({
        ...prev,
        coordinates: {
          ...prev.coordinates,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const getLocation = () => {
    setIsLocating(true);
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          coordinates: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
        }));
        setIsLocating(false);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("Please allow location access to create a Bite");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable");
            break;
          case error.TIMEOUT:
            setLocationError("Location request timed out");
            break;
          default:
            setLocationError("An unknown error occurred");
        }
        setIsLocating(false);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.coordinates.lat || !formData.coordinates.lon) {
      setLocationError("Location is required to create a Bite.");
      return;
    }

    const dataToSend = {
      ...formData,
      provider: auth.id,
    };
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SITE}/provider/addEvent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );
      console.log(token)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Event created successfully:", result);
      setFormData({
        name: "",
        venue: "",
        quantity: "",
        expectedWastage: 0,
        coordinates: {
          lat: "",
          lon: "",
        },
        startTime: "",
        endTime: "",
      });
    } catch (error) {
      console.error("Error creating event:", error);
    }

    console.log(dataToSend);
  };

  const toggleModal = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      {showForm && (
        <div className="absolute inset-0 z-50 flex items-start justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 -z-10"
            onClick={toggleModal}
          ></div>

          <div className="w-full max-w-lg p-4 mx-2 md:mx-auto bg-white rounded-lg shadow-lg relative md:max-w-2xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white rounded-lg p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Add New Bite
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Evening Food Rescue"
                  />
                </div>

                <div>
                  <label
                    htmlFor="venue"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Venue
                  </label>
                  <input
                    type="text"
                    name="venue"
                    id="venue"
                    required
                    value={formData.venue}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Restaurant/Event Location"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      required
                      value={formData.quantity}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="e.g., 50 meals"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="expectedWastage"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expected Wastage (kg)
                    </label>
                    <input
                      type="number"
                      name="expectedWastage"
                      id="expectedWastage"
                      required
                      value={formData.expectedWastage}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {/* Location Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    Location
                  </h3>
                  <button
                    type="button"
                    onClick={getLocation}
                    disabled={isLocating}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-emerald-300"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {isLocating
                      ? "Getting Location..."
                      : "Get Current Location"}
                  </button>
                </div>

                {locationError && (
                  <div className="flex items-center p-4 text-red-800 bg-red-50 rounded-md">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm">{locationError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="lat"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Latitude
                    </label>
                    <input
                      type="number"
                      name="lat"
                      id="lat"
                      value={formData.coordinates.lat}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50"
                      step="any"
                      readOnly
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lon"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Longitude
                    </label>
                    <input
                      type="number"
                      name="lon"
                      id="lon"
                      value={formData.coordinates.lon}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 bg-gray-50"
                      step="any"
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Event Timing
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="startTime"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Start Time
                    </label>
                    <input
                      type="datetime-local"
                      name="startTime"
                      id="startTime"
                      required
                      value={formData.startTime}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="endTime"
                      className="block text-sm font-medium text-gray-700"
                    >
                      End Time
                    </label>
                    <input
                      type="datetime-local"
                      name="endTime"
                      id="endTime"
                      required
                      value={formData.endTime}
                      onChange={handleChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none"
                >
                  Create Bite
                </button>
              </div>
            </form>

            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEvent;
