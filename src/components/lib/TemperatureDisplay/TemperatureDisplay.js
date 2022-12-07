import React from "react";
import { Loading, PressureDisplay } from "../";
import "./TemperatureDisplay.css";

const TemperatureDisplay = ({ tempData }) => {
  const deg = <span>&deg;C</span>; // TODO handle other formats

  return tempData != null ? (
    <div className="temperatureDisplay">
      <div className="left">
        <div className="temp">
          {Math.round(tempData.temp)} {deg}
        </div>
        <div className="feelsLike">
          Feels like {Math.round(tempData.feels_like)} {deg}
        </div>
        <div className="minMax">
          <div className="min">
            Low: {Math.round(tempData.temp_min)} {deg}
          </div>
          <div className="max">
            High: {Math.round(tempData.temp_max)} {deg}
          </div>
        </div>
      </div>
      <div className="right">
        <div className="humidity">{tempData.humidity}% Hum.</div>
        <PressureDisplay pressureData={tempData} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default TemperatureDisplay;
