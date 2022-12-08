import React from "react";
import "./HumidityDisplay.css";

const HumidityDisplay = ({ humidityData }) => {
  return <div className="humidity">{humidityData.humidity}% Hum.</div>;
};

export default HumidityDisplay;
