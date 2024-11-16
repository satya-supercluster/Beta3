/* eslint-disable no-useless-catch */
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useUserType } from "./UserTypeContext";
const DataContext = createContext();
export const useData = () => useContext(DataContext);
export const DataProvider = ({ children }) => {
  const {userType} = useUserType();
  const [byteEvents, setByteEvents] = useState(null);
  const [donorEvents, setDonorEvents] = useState(null);
  const [providerEvents, setProviderEvents] = useState([]);
  const [subscribers, setSubribers] = useState(0);
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
        setSubribers(0);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setDonorEvents(data);
    } catch (err) {
      // setEvents(null);
      throw err;
    }
  }
  const fetchProviderEventsData = async() =>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_SITE}/${userType}/getevents`,{
        headers:{
          Authorization:"Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        }
      });
      if(!response){
        setProviderEvents(null);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const { events, subs } = response.data;
      setProviderEvents(events);
      setSubribers(subs);
    } catch (error) {
      throw error;
      // console.log(error.meesage);
    }
  }
  // useEffect(() => {
  //   fetchByteEvents();
  //   fetchDonorEvents();

  // }, []);
  console.log("donorEvents: ", donorEvents);
  return (
    <DataContext.Provider
      value={{
        byteEvents: byteEvents,
        donorEvents:donorEvents,
        fetchProviderEventsData,
        fetchDonorEvents,
        fetchByteEvents,
        providerEvents,
        subscribers,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
