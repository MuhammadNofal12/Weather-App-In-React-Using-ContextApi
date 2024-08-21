// src/components/CityInput.js
import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function CityInput() {
  const { setCity } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setCity(inputValue);
      setInputValue(""); // Clear the input after submitting
    }
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city name"
          className="w-64 p-3 mb-4 text-center border border-gray-300 border-solid rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 font-semibold text-white transition duration-300 bg-blue-500 rounded-full shadow-md hover:bg-blue-600"
        >
          Get Weather
        </button>
      </form>
    </div>
  );
}

export default CityInput;
