import React, { createContext, useContext, useEffect, useState } from "react";
const DataContext = createContext();
export const useData = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  const [events, setEvents] = useState(null);
  async function fetchEvents() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SITE}/consumer/getevents`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        setEvents(null);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setEvents(data.response);
    } catch (err) {
      // setEvents(null);
      throw err;
    }
  }
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <DataContext.Provider
      value={{
        events: events,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
