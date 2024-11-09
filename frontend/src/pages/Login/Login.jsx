import React, { createContext, useState, useContext } from "react";
import { useUserType } from "../../context/UserTypeContext";
import { useAuth } from "../../context/AuthContext";
const Login = () => {
  const { userType, setUserType } = useUserType();
  const { login } = useAuth();
  const handleGoogleSignIn = () => {
    login();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 text-white">
      <div className="w-full max-w-md bg-blue-500 rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-200">Welcome Back</h1>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex border rounded-lg overflow-hidden">
            <button
              onClick={() => setUserType("consumer")}
              className={`flex-1 py-2 px-4 text-sm font-medium ${
                userType === "consumer"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              Consumer
            </button>
            <button
              onClick={() => setUserType("provider")}
              className={`flex-1 py-2 px-4 text-sm font-medium ${
                userType === "provider"
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
            >
              Provider
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-medium">
              Sign in as {userType === "consumer" ? "Consumer" : "Provider"}
            </h3>
            <p className="text-sm text-white">
              {userType === "consumer"
                ? "Connect with providers and share your expertise"
                : "Find consumers and accelerate your growth"}
            </p>
          </div>

          {/* Google Sign In Button */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-md bg-white text-blue-700 focus:outline-none hover:bg-gray-200 "
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              {/* SVG content */}
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Terms */}
          <div className="text-center text-sm text-white">
            By continuing, you agree to our{" "}
            <a href="#" className="font-bold hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-bold hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
