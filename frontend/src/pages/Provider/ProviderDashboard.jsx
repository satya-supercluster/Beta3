import React, { useEffect, useState } from "react";
import axios from 'axios';
import {
  Calendar,
  Clock,
  Users,
  PlusCircle,
  Bell,
  Settings,
  Utensils,
  TrendingUp,
} from "lucide-react";
import AddEvent from "../../components/AddProviderEvent/AddEvent";
import { useUserType } from "../../context/UserTypeContext";
import { useData } from "../../context/DataContext";

const ProviderDashboard = () => {
  const { userType } = useUserType();
  const { fetchProviderEventsData, providerEvents, subscribers } = useData();
  const indianTimeFormat = (utcDateTime) => {
    try {
      const date = new Date(utcDateTime);
  
      // Format the date to IST
      const options = {
        timeZone: "Asia/Kolkata",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const istDateTime = date.toLocaleString("en-IN", options);
      // console.log("Indian Date Time:", istDateTime);
      return istDateTime;
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(()=>{
    fetchProviderEventsData();
  },[])
  const [showForm, setShowForm] = useState(false);
  // const [subscriptions, setSubscriptions] = useState([]);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Subscribers
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">142</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Food Saved (kg)
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">324</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              Active Subscription Plans
            </h2>
            <button
              onClick={()=>setShowForm(true)}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add New Bite
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {providerEvents?.map((plan) => (
              <div
                key={plan._id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-4">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-medium text-gray-900">
                        {plan.name}
                      </h3>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {plan.currentSubscribers}/{plan.maxSubscribers}
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="h-4 w-4 mr-1.5 text-gray-400" />
                      {indianTimeFormat(plan.startTime)}
                    </div>

                    <div className="flex flex-col space-y-2 mt-auto">
                      <p className="text-sm text-gray-500">
                        Regular: ₹{plan.price}
                      </p>
                      <p className="text-sm text-gray-500">
                        Discounted: ₹{plan.discountedPrice}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">{plan.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {
        showForm?<AddEvent showForm={showForm} setShowForm={setShowForm}/>:null
      }
    </div>
  );
};

export default ProviderDashboard;
