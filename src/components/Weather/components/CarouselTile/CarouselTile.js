import React from "react";
import { Loading, TemperatureDisplay, WindDisplay, WeatherTile } from "../";
import { getTimeFromDate } from "../../util";
import "./CarouselTile.css";

const CarouselTile = ({ tileData }) => {
  return tileData != null ? (
    <div className="carouselTile">
      <div>{new Date(tileData.dt * 1000).toLocaleDateString()}</div>
      <div>{getTimeFromDate(tileData.dt)}</div>
      <WeatherTile tileData={tileData.weather[0]} />
      <TemperatureDisplay tempData={tileData.main} />
      <WindDisplay windData={tileData.wind} />
    </div>
  ) : (
    <Loading />
  );
};

export default CarouselTile;
