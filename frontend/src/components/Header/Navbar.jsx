import React from "react";

const Navi = ({ menuOpen, toggleMenu }) => {
  return (
    <div className="nav flex justify-between items-center px-6 py-4 bg-black text-white bg-opacity-70">
      <p className="title text-3xl font-bold">Byte Me</p>

      {}
      <button
        onClick={toggleMenu}
        className="sm:hidden text-white focus:outline-none"
      >
        <svg 
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {}
      <div
        className={`flex-col sm:flex sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        <a href="#home" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#about" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#services" className="text-white hover:text-gray-300">
          Services
        </a>
        <a href="#contact" className="text-white hover:text-gray-300">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navi;
