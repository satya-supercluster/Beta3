/* eslint-disable no-useless-catch */
import React, { createContext, useContext, useEffect, useState } from "react";
const DataContext = createContext();
export const useData = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  const [byteEvents, setByteEvents] = useState(null);
  const [donorEvents, setDonorEvents] = useState(null);
  async function fetchByteEvents() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SITE}/consumer/getbyte`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        setByteEvents(null);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setByteEvents(data);
    } catch (err) {
      // setEvents(null);
      throw err;
    }
  }
  async function fetchDonorEvents() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SITE}/consumer/getdonor`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        setDonorEvents(null);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setDonorEvents(data);
    } catch (err) {
      // setEvents(null);
      throw err;
    }
  }
  useEffect(() => {
    fetchByteEvents();
    fetchDonorEvents();
  }, []);
  console.log("donorEvents: ", donorEvents);
  return (
    <DataContext.Provider
      value={{
        byteEvents: byteEvents,
        donorEvents:donorEvents
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
