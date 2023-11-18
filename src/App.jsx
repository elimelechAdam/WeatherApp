import { CurrentWeather } from "./components/CurrentWeather";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { ExtendedForecast } from "./components/ExtendedForecast";
import { useEffect } from "react";
import { useGeolocation } from "./hooks/useGeolocation";

function App() {
  const { location, getLocation } = useGeolocation();
  const { weather, coordinates, forecast } = location;
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <div className="background"></div>

      <Navbar />
      {/* Search */}
      <Search />
      {/* Current Weather */}
      {weather ? (
        <CurrentWeather currentweather={weather} />
      ) : (
        <div>Loading weather data...</div> // Placeholder for loading state
      )}
      {/* Extended forecast */}
      {forecast ? (
        <ExtendedForecast forecast={forecast} />
      ) : (
        <div>Loading weather data...</div> // Placeholder for loading state
      )}
    </>
  );
}

export default App;
