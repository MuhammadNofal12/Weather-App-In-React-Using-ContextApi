// src/context/WeatherContext.js
import React, { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7068d2aa184698e8a91ada2afb094069&units=metric`
          );
          const data = await response.json();
          const dailyData = data.list.filter((reading) =>
            reading.dt_txt.includes("12:00:00")
          );
          setWeatherData(dailyData);
          setCurrentWeather(dailyData[0]);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };

      fetchWeather();
    }
  }, [city]);

  return (
    <WeatherContext.Provider
      value={{ city, setCity, weatherData, currentWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext };
