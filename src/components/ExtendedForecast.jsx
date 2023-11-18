import React from "react";
import { FaCloud } from "react-icons/fa";
import {
  convertTimeToReadable,
  kelvinToCelsius,
  formatDate,
} from "../utils/utils";

export const ExtendedForecast = ({ forecast }) => {
  return (
    <div className="p-5 flex flex-col  items-center">
      <h1 className="text-white text-xl my-3">Forecast</h1>
      <div className="flex gap-2 rounded-md">
        {forecast.list
          .map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white bg-opacity-50 p-2 dark:bg-black dark:bg-opacity-50 text-white dark:text-black"
              >
                <span className="text-white text-lg ">
                  {/* i want only the date for example without the*/}
                  {formatDate(item.dt_txt.split(" ")[0])}

                  {/* {item.dt_txt.split(" ")[1].split(":")[0]}:00 */}
                </span>
                <FaCloud size={50} />
                <span className="text-white text-lg">
                  {kelvinToCelsius(item.main.temp)}°
                </span>
              </div>
            );
          })
          .slice(0, 5)}
      </div>
    </div>
  );
};
