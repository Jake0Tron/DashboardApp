import React from "react";
import Loading from "../../../lib/Loading";
import "./WeatherTile.scss";

const WeatherTile = ({ tileData }) => {
  return tileData != null ? (
    <div className="weatherTile shadowed">
      <img
        className="icon"
        src={`http://openweathermap.org/img/wn/${tileData.icon}.png`}
        alt={tileData.main}
      />
      <div className="description">{tileData.description}</div>
    </div>
  ) : (
    <Loading />
  );
};

export default WeatherTile;
