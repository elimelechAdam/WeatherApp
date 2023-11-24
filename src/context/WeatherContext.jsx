import React, { createContext, useContext, useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { location, setLocation, getLocation, updateLocation } =
    useGeolocation();
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <WeatherContext.Provider
      value={{ location, setLocation, getLocation, updateLocation }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
