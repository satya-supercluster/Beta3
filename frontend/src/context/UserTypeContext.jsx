import React, { createContext, useState, useContext, useEffect } from "react";

const UserTypeContext = createContext();

export const useUserType = () => useContext(UserTypeContext);

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState(JSON.parse(localStorage.getItem("auth"))?.role || "consumer");
  const [loginButton, setLoginButton] = useState(false);

  return (
    <UserTypeContext.Provider
      value={{ userType, setUserType, loginButton, setLoginButton }}
    >
      {children}
    </UserTypeContext.Provider>
  );
};
