import React from "react";
import {
  ArrowRight,
  Check,
  Leaf,
  DollarSign,
  CalendarClock,
} from "lucide-react";

const ConsumerDashboard = () => {
  const features = [
    {
      title: "Track Your Food",
      description: "Log and monitor your food inventory with expiration dates",
      icon: <CalendarClock className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Save Money",
      description: "Reduce food wastage by utilizing what you have",
      icon: <DollarSign className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Help The Planet",
      description: "Minimize your environmental impact by reducing waste",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reduce Food Waste, Save Money
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Track your food, get reminded before they expire, and join
              the movement to reduce food waste.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 flex items-center justify-center">
                Start Saving Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="features" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose BiteMe?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="how-it-works" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Scan your groceries or add them manually",
              "Get notifications before food expires",
              "Track your savings and environmental impact",
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Reduce Food Waste?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of users making a difference.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg hover:bg-gray-100">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
