// src/components/WeatherList.js
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";

function WeatherList() {
  const { weatherData, currentWeather } = useContext(WeatherContext);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {weatherData.map((day, index) => (
        <WeatherCard
          key={index}
          day={day}
          isCurrent={currentWeather && day.dt_txt === currentWeather.dt_txt}
        />
      ))}
    </div>
  );
}

export default WeatherList;
