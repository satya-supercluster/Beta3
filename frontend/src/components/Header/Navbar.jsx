import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useUserType } from "../../context/UserTypeContext";

const Navi = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth } = useAuth();
  const { setLoginButton } = useUserType();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  const handleClickOutside = (e) => {
    if (menuOpen && !e.target.closest(".nav")) {
      setMenuOpen(false);
    }
  };

  // Add click outside listener
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="w-full bg-black bg-opacity-70 shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="nav flex justify-between items-center px-6 py-4">
          <p className="title text-3xl font-bold text-white hover:text-gray-200 transition-colors">
            Byte Me
          </p>

          <button
            onClick={toggleMenu}
            className="sm:hidden text-white focus:outline-none hover:text-gray-300 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <div
            className={`absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto w-full sm:w-auto 
            bg-black sm:bg-transparent bg-opacity-70 sm:bg-opacity-100 
            shadow-lg sm:shadow-none
            flex-col sm:flex sm:flex-row sm:items-center 
            space-y-4 sm:space-y-0 sm:space-x-6 
            py-4 sm:py-0 px-6 sm:px-0
            transition-all duration-300 ease-in-out
            ${menuOpen ? "flex" : "hidden"}`}
          >
            {auth ? (
              <>
                <a
                  href="#home"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
                  onClick={() => {
                    setMenuOpen(false);
                    // Add your logout logic here
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setLoginButton(true);
                  setMenuOpen(false);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navi;
