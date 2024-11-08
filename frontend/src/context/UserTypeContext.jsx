import React, { createContext, useState, useContext } from "react";

const UserTypeContext = createContext();

export const useUserType = () => useContext(UserTypeContext);

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
