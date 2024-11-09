import React, { createContext, useContext, useState } from "react";
const DataContext = createContext();
export const useData = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  
  return (
    <DataContext.Provider
      value={{
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
