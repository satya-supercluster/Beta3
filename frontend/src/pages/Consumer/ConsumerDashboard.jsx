import React, { useState } from "react";
import { Calendar, Clock, MapPin, Search, Filter, Star } from "lucide-react";

const ConsumerDashboard = () => {
  const [providers, setProviders] = useState([
    {
      id: 1,
      name: "Grand Hotel Kitchen",
      rating: 4.5,
      location: "MG Road, Bangalore",
      distance: "1.2 km",
      subscriptions: [
        {
          id: 1,
          name: "Regular Lunch Plan",
          price: 100,
          discountedPrice: 70,
          time: "12:00 PM - 2:00 PM",
          available: 5,
          type: "Daily",
        },
      ],
      surplusAvailable: true,
    },
    {
      id: 2,
      name: "College Mess",
      rating: 4.2,
      location: "HSR Layout, Bangalore",
      distance: "0.8 km",
      subscriptions: [
        {
          id: 2,
          name: "Dinner Plan",
          price: 80,
          discountedPrice: 55,
          time: "7:00 PM - 9:00 PM",
          available: 8,
          type: "Daily",
        },
      ],
      surplusAvailable: false,
    },
  ]);

  const [selectedProvider, setSelectedProvider] = useState(null);

  return (
    <div className="md:mt-24 min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                placeholder="Search by location..."
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2 text-gray-400" />
              Filters
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {provider.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="ml-1 text-sm text-gray-600">
                        {provider.rating}
                      </span>
                    </div>
                  </div>
                  {provider.surplusAvailable && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Surplus Available
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  <span>
                    {provider.location} • {provider.distance}
                  </span>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-900">
                    Available Subscriptions
                  </h4>
                  <div className="mt-2 space-y-4">
                    {provider.subscriptions.map((sub) => (
                      <div key={sub.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="text-sm font-medium text-gray-900">
                              {sub.name}
                            </h5>
                            <p className="mt-1 text-sm text-gray-500">
                              <Clock className="inline-block h-4 w-4 mr-1" />
                              {sub.time}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500 line-through">
                              ₹{sub.price}
                            </p>
                            <p className="text-sm font-medium text-emerald-600">
                              ₹{sub.discountedPrice}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            {sub.available} slots available
                          </span>
                          <button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
