import React from "react";
import { FaCloud } from "react-icons/fa";
import {
  kelvinToCelsius,
  convertTimeToReadable,
  formatDate,
} from "../utils/utils.js";
export const CurrentWeather = ({ currentweather }) => {
  const { main, sys, weather, name, wind } = currentweather;

  return (
    <div className="flex items-center justify-center my-7">
      <div className=" w-[700px]">
        <div className="flex gap-5 justify-between">
          <div>
            <span className="font-semibold text-3xl text-white dark:text-black">
              {name}, {sys.country}
            </span>

            <div className="flex items-center gap-2 text-white dark:text-black">
              <FaCloud size={100} />
              <span className="text-6xl">{kelvinToCelsius(main.temp)}</span>
            </div>
            <span className="text-white text-lg block dark:text-black dark:font-bold">
              {weather[0].main}
            </span>
          </div>

          <div className="grid grid-cols-3">
            <div className="flex flex-col items-center py-4 px-9 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white font-semibold">
              <span>{kelvinToCelsius(main.temp_max)}°</span>
              <span>Hight</span>
            </div>
            <div className="flex flex-col items-center py-4 px-9 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white 	font-semibold">
              <span>{wind.speed}mph</span>
              <span>Wind</span>
            </div>
            <div className="flex flex-col items-center py-4 px-9 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white 	font-semibold">
              <span>{convertTimeToReadable(sys.sunrise)}</span>
              <span>Sunrise</span>
            </div>
            <div className="flex flex-col items-center py-4 px-9 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white 	font-semibold">
              <span>{kelvinToCelsius(main.temp_min)}°</span>
              <span>Low</span>
            </div>
            <div className="flex flex-col items-center py-4 px-9 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white 	font-semibold">
              <span>{main.humidity}%</span>
              <span>Humidity</span>
            </div>
            <div className="flex flex-col items-center py-4 px-9 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white 	font-semibold">
              <span>{convertTimeToReadable(sys.sunset)}</span>
              <span>Sunset</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
