import React from "react";
import './index.css';

const NavBar = () => {
  return (
    <div className="mainZero bg-white min-h-screen bg-image">
      <div className="nav flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-black text-white bg-opacity-70">
        <p className="title text-3xl font-bold mb-4 sm:mb-0">Byte Me</p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-600">
            Login
          </button>
          <button className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
