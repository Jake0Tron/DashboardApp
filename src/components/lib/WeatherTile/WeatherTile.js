import React from "react";
import "./WeatherTile.css";

const WeatherTile = ({ tileData }) => {
  return tileData != null ? (
    <div className="weatherTile">
      <div>{tileData.main}</div>
      <div>{tileData.description}</div>
      <div>{tileData.icon}</div>
      {/* TODO: figure out this icon code 
      https://openweathermap.org/weather-conditions 
      eg. http://openweathermap.org/img/wn/10d@2x.png 
      */}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default WeatherTile;
