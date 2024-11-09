import React from "react";
import ProviderCard from "../../components/ProviderCard/ProviderCard";
import { useData } from "../../context/DataContext";
const ConsumerDonor = () => {
    const { events } = useData();
    // console.log(events)
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Available Bites
      </h1>

      {/* Responsive grid layout */}
      <div className="grid gap-x-6 gap-y-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events&&events.map((event, index) => (
          <ProviderCard
            key={index}
            event={event}
            tag={"Get it"}
          ></ProviderCard>
        ))}
      </div>
    </div>
  );
};

export default ConsumerDonor;
