import React from "react";
import { Loading, PressureDisplay } from "../";
import "./TemperatureDisplay.css";

const TemperatureDisplay = ({ tempData }) => {
  const deg = (temp) => <span>{temp}&deg;C</span>; // TODO handle other formats

  return tempData != null ? (
    <div className="temperatureDisplay">
      <div className="temp">{deg(Math.round(tempData.temp))}</div>
      <div>
        <div className="feelsLike">
          Feels like {deg(Math.round(tempData.feels_like))}
          <div className="minMax">
            <div className="min">Low: {deg(Math.round(tempData.temp_min))}</div>
            <div className="max">
              High: {deg(Math.round(tempData.temp_max))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default TemperatureDisplay;
