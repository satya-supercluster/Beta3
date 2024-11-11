import React from "react";
import ProviderCard from "../../components/ProviderCard/ProviderCard";
import { useData } from "../../context/DataContext";
const ConsumerBites = () => {
  const { byteEvents } = useData();
  return (
    <div className="container mx-auto p-4">
      <h1
        className="text-2xl flex justify-center font-semibold text-center
       text-gray-800 mb-6"
      >
        Available Bites
      </h1>

      {/* Responsive grid layout */}
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {byteEvents &&
          byteEvents.map((event, index) => (
            <ProviderCard
              key={index}
              event={event}
              tag={"Subscribe"}
              price={"$20"}
            />
          ))}
      </div>
    </div>
  );
};

export default ConsumerBites;
