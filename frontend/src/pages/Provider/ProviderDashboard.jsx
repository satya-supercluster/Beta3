import React, { useState } from "react";
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

const ProviderDashboard = () => {
  const [subscriptions, setSubscriptions] = useState([
    {
      id: 1,
      name: "Regular Lunch Plan",
      price: 100,
      discountedPrice: 70,
      maxSubscribers: 30,
      currentSubscribers: 25,
      time: "12:00 PM - 2:00 PM",
      description: "Daily lunch surplus from our kitchen",
      type: "Daily",
    },
  ]);

  const [surplusAlerts, setSurplusAlerts] = useState([
    {
      id: 1,
      date: "2024-11-09",
      time: "1:30 PM",
      portions: 15,
      claimed: 8,
      description: "Extra vegetarian meals available",
    },
  ]);

  const [showNewPlanForm, setShowNewPlanForm] = useState(false);
  const [showSurplusForm, setShowSurplusForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Utensils className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                FoodShare Pro
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
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

        {/* Subscription Plans Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              Active Subscription Plans
            </h2>
            <button
              onClick={() => setShowNewPlanForm(true)}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              New Plan
            </button>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {subscriptions.map((plan) => (
                <li key={plan.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900 truncate">
                          {plan.name}
                        </h3>
                        <p className="mt-1 flex items-center text-sm text-gray-500">
                          <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          {plan.time}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {plan.currentSubscribers}/{plan.maxSubscribers} slots
                          filled
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          Regular: ₹{plan.price} | Discounted: ₹
                          {plan.discountedPrice}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>{plan.type}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Surplus Alerts Section */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-900">
              Today's Surplus Alerts
            </h2>
            <button
              onClick={() => setShowSurplusForm(true)}
              className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Post Surplus
            </button>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {surplusAlerts.map((alert) => (
                <li key={alert.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-emerald-600 truncate">
                          {alert.description}
                        </p>
                        <p className="mt-1 flex items-center text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          {alert.date} at {alert.time}
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {alert.claimed}/{alert.portions} portions claimed
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
