import React from "react";
import {
  Loading,
  PressureDisplay,
  TemperatureDisplay,
  WindDisplay,
  WeatherTile,
} from "../";
import { CollapsibleSection } from "../../../lib";
import { getTimeFromDate } from "../../util";
import HumidityDisplay from "../HumidityDisplay";
import "./CarouselTile.scss";

const CarouselTile = ({ tileData }) => {
  return tileData != null ? (
    <div className="carouselTile">
      <div>
        {getTimeFromDate(tileData.dt)}
        {"-"}
        {new Date(tileData.dt * 1000).toLocaleDateString()}
      </div>
      <WeatherTile tileData={tileData.weather[0]} />
      <CollapsibleSection>
        <TemperatureDisplay tempData={tileData.main} />
        <WindDisplay windData={tileData.wind} />
        <PressureDisplay pressureData={tileData.main} />
        <HumidityDisplay humidityData={tileData.main} />
      </CollapsibleSection>
    </div>
  ) : (
    <Loading />
  );
};

export default CarouselTile;
