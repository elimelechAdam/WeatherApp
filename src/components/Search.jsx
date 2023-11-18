import React, { useState } from "react";
import { useWeatherSearch } from "../hooks/useWeatherSearch";

export const Search = () => {
  const [locationName, setLocationName] = useState("");
  const { weatherData, loading, error, searchWeather } = useWeatherSearch();

  const handleSearch = (e) => {
    e.preventDefault();
    searchWeather(locationName);
    console.log(weatherData);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setLocationName(e.target.value)}
          value={locationName}
          className="w-[520px] p-2 rounded-full shadow-md"
          placeholder="Search for a city"
        />
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}°K</p>
        </div>
      )}
    </div>
  );
};
