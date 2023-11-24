import React, { useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { useWeather } from "../context/WeatherContext";

export const Search = () => {
  const [locationName, setLocationName] = useState("");
  const { updateLocation } = useWeather();

  const handleSearch = (e) => {
    e.preventDefault();
    updateLocation(locationName); // Call updateLocation with the location name
    console.log(locationName);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setLocationName(e.target.value)}
          value={locationName}
          className="w-[700px] p-4 bg-gray-100 rounded-lg shadow-md"
          placeholder="Search for a city"
        />
      </form>
    </div>
  );
};
