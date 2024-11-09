
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useUserType } from "../../context/UserTypeContext";
import { useAuth } from "../../context/AuthContext";
const Login = () => {
  const { setUserType, userType, setLoginButton } = useUserType();
  const { login } = useAuth();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={() => setLoginButton(false)}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl">
        {/* Close button */}
        <button
          onClick={() => setLoginButton(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setUserType("consumer")}
                className={`flex-1 py-2 px-4 text-sm font-medium ${
                  userType === "consumer"
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                Consumer
              </button>
              <button
                onClick={() => setUserType("provider")}
                className={`flex-1 py-2 px-4 text-sm font-medium ${
                  userType === "provider"
                    ? "bg-emerald-500 text-white"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
              >
                Provider
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-medium text-gray-800">
                Sign in as {userType === "consumer" ? "Consumer" : "Provider"}
              </h3>
              <p className="text-sm text-gray-600">
                {userType === "consumer"
                  ? "Join us in reducing food waste and making a difference"
                  : "Partner with us to share surplus food with those in need"}
              </p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={login}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Terms */}
            <div className="text-center text-sm text-gray-600">
              By continuing, you agree to our{" "}
              <a
                href="#"
                className="font-medium text-emerald-600 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-medium text-emerald-600 hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


















