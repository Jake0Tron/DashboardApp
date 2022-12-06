import React from "react";
import { PressureDisplay } from "../";
import "./TemperatureDisplay.css";

const TemperatureDisplay = ({ tempData }) => {
  const deg = <span>&deg;C</span>; // TODO handle other formats

  return tempData != null ? (
    <div className="temperatureDisplay">
      <div className="left">
        <div className="temp">
          {tempData.temp} {deg}
        </div>
        <div className="feelsLike">
          Feels like {tempData.feels_like} {deg}
        </div>
        <div className="minMax">
          <div className="min">
            Low: {tempData.temp_min} {deg}
          </div>
          <div className="max">
            High: {tempData.temp_max} {deg}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="humidity">{tempData.humidity}% Hum.</div>
        <PressureDisplay pressureData={tempData} />
      </div>

      {/* "pressure":1018,
            "sea_level":1018,
            "grnd_level":999,
            "humidity":87,
        */}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default TemperatureDisplay;
