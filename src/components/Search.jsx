import React, { useState } from "react";
import { useWeather } from "../context/WeatherContext";
import axios from "axios";

export const Search = () => {
  const [locationName, setLocationName] = useState("");
  const { updateLocation } = useWeather();
  const [cities, setCities] = useState([]);
  const [dropdown, setDropdown] = useState(false);

  const handleSearch = async (locationName) => {
    if (!locationName) return null;
    const username = "winzip"; // Replace with your GeoNames username
    const resp = await axios.get(
      `http://api.geonames.org/searchJSON?q=${locationName}&maxRows=10&username=${username}`
    );
    console.log(resp);
    updateLocation(locationName);
    setCities(resp.data.geonames.map((city) => city.name));
    console.log(cities);
  };

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <div>
        <input
          type="text"
          onChange={(e) => {
            setLocationName(e.target.value);
            handleSearch(e.target.value);
            setDropdown(true);
          }}
          value={locationName}
          className="w-[700px] p-4 bg-gray-100 rounded-lg shadow-md"
          placeholder="Search for a city"
        />
        {dropdown && cities.length > 0 && (
          <ul className="z-10 text-center rounded-md bg-white p-4 shadow-lg max-h-60 overflow-auto mt-1">
            {cities.map((city, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setDropdown(false);
                  updateLocation(city); // Assuming updateLocation fetches and updates weather info
                }}
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <CitySearch
        setLocationName={setLocationName}
        locationName={locationName}
      /> */}
    </div>
  );
};
