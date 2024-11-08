import React, { createContext, useState, useContext } from "react";

// Create the UserTypeContext
const UserTypeContext = createContext();

// Create a custom hook to access the user type state
export const useUserType = () => useContext(UserTypeContext);

// UserTypeProvider component to wrap the app
export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState("Consumer");
  const [loginButton, setLoginButton] = useState(false);

  return (
    <UserTypeContext.Provider
      value={{ userType, setUserType, loginButton, setLoginButton }}
    >
      {children}
    </UserTypeContext.Provider>
  );
};
