/* eslint-disable react/prop-types */
import React from 'react';

// Simple SVG icons as components
const CalendarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 10h18M8 2v4M16 2v4" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 21h18M5 21V7l8-4v18M13 21V7l6 3v11M9 9h1M9 13h1M9 17h1M15 13h1M15 17h1" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 21c3-3 8-9.5 8-13a8 8 0 1 0-16 0c0 3.5 5 10 8 13Z" />
    <circle cx="12" cy="8" r="2" />
  </svg>
);

const PackageIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 9v4m0 3v.01M3 21h18L12 3 3 21z" />
  </svg>
);

const TimerIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const EventCard = ({ name, date, venue, quantity, expectedWastage, location, duration }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-sm w-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white truncate">{name}</h2>
            <span className="bg-blue-500 bg-opacity-30 text-white text-xs px-3 py-1 rounded-full border border-white border-opacity-20">
              Upcoming
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Primary Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <CalendarIcon />
              <span className="text-sm">{formattedDate}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <BuildingIcon />
              <span className="text-sm">{venue}</span>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <LocationIcon />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <PackageIcon />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Quantity</p>
                  <p className="text-sm font-semibold text-gray-900">{quantity}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <AlertIcon />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Expected Wastage</p>
                  <p className="text-sm font-semibold text-gray-900">{expectedWastage}%</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-3">
                <TimerIcon />
                <div>
                  <p className="text-xs text-gray-500 font-medium">Duration</p>
                  <p className="text-sm font-semibold text-gray-900">{duration} hours</p>
                </div>
              </div>
            </div>


          </div>

          {/* Action Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium 
            hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:ring-offset-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;