import { useState } from "react";
import axios from "axios";

export const useWeatherSearch = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = "b06ab2a7c949613ebd7dbcb7914df317";

  const searchWeather = async (locationName) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`
      );
      setWeatherData(data);
      console.log(data.coord);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, searchWeather };
};
