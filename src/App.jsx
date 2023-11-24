import { WeatherProvider } from "./context/WeatherContext";
import { CurrentWeather } from "./components/CurrentWeather";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { ExtendedForecast } from "./components/ExtendedForecast";
import { useEffect } from "react";
import { useWeather } from "./context/WeatherContext";

function App() {
  // useEffect(() => {
  //   getLocation();
  // }, []);
  return (
    <WeatherProvider>
      <div className="background"></div>
      <Navbar />
      <Search />
      <CurrentWeather />
      <ExtendedForecast />
    </WeatherProvider>
  );
}

export default App;
