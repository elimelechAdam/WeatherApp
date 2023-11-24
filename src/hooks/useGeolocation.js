import { useState } from "react";
import axios from "axios";

export const useGeolocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
    weather: null, // Add state for weather data
    forecast: null, // State for weather forecast data
  });

  const API_KEY = "b06ab2a7c949613ebd7dbcb7914df317";

  function getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Fetch weather data after getting coordinates
          try {
            const weatherResponse = await axios.get(
              `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            const forecastResponse = await axios.get(
              `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
            setLocation({
              loaded: true,
              coordinates: { lat: latitude, lng: longitude },
              weather: weatherResponse.data,
              forecast: forecastResponse.data,
            });
          } catch (error) {
            setLocation({
              loaded: true,
              error: error,
            });
          }
        },
        function (error) {
          setLocation({
            loaded: true,
            error,
          });
        }
      );
    } else {
      setLocation({
        loaded: true,
        error: {
          code: 0,
          message: "Geolocation is not supported by this browser.",
        },
      });
    }
  }

  async function updateLocation(locationName) {
    try {
      console.log("Searching for:", locationName); // Check if the function is called with correct input
      if (!locationName) return;
      const weatherResponse = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`
      );
      const forecastResponse = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${locationName}&appid=${API_KEY}`
      );
      console.log("Weather data:", weatherResponse.data); // Check the fetched data

      setLocation({
        loaded: true,
        coordinates: {
          lat: weatherResponse.data.coord.lat,
          lng: weatherResponse.data.coord.lon,
        },
        weather: weatherResponse.data,
        forecast: forecastResponse.data,
      });
    } catch (err) {
      console.log("error: ", err);
    }
  }

  return { location, setLocation, getLocation, updateLocation };
};
