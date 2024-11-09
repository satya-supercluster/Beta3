import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useUserType } from "../../context/UserTypeContext";
import { NavLink } from "react-router-dom";
const Navi = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth,logout } = useAuth();
  const { setLoginButton, setUserType } = useUserType();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (e) => {
    if (menuOpen && !e.target.closest(".nav")) {
      setMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="w-full bg-gray-900 shadow-md shadow-gray-200 z-10 fixed top-0">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
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
                <NavLink
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </NavLink>
                <NavLink
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Bites
                </NavLink>
                <NavLink
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacts
                </NavLink>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
                  onClick={() => {
                    setMenuOpen(false);
                    setUserType("consumer");
                    setLoginButton(false);
                    logout();
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
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
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
