import React from "react";

function WeatherCard({ day, isCurrent }) {
  const { dt_txt, main, weather } = day;
  const date = new Date(dt_txt);
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "1rem",
        padding: "1.5rem",

        margin: "1rem", // Adding margin between cards
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: isCurrent ? "4px solid #4299e1" : "",
        transform: "scale(1.05)",
        transition: "transform 0.3s ease",
      }}
    >
      <h2
        style={{
          marginBottom: "0.5rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#4a5568",
        }}
      >
        {dayName}
      </h2>
      <p
        style={{ marginBottom: "1rem", fontSize: "0.875rem", color: "#a0aec0" }}
      >
        {date.toLocaleDateString()}
      </p>
      <p
        style={{
          marginBottom: "0.5rem",
          fontSize: "1.125rem",
          color: "#718096",
        }}
      >
        Temperature: {main.temp}°C
      </p>
      <p style={{ fontSize: "1.125rem", color: "#718096" }}>
        Weather: {weather[0].description}
      </p>
    </div>
  );
}

export default WeatherCard;
