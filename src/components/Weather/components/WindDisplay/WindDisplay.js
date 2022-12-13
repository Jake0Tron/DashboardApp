import React from "react";
import Loading from "../../../lib/Loading";
import "./WindDisplay.scss";

// return a Compass Direction from degrees provided
const degToDir = (deg) => {
  let portion = 45 / 2;
  const directions = [
    "X",
    "N",
    "NE",
    "NE",
    "E",
    "E",
    "SE",
    "SE",
    "S",
    "S",
    "SW",
    "SW",
    "W",
    "W",
    "NW",
    "NW",
    "N",
  ];

  for (let i = 1; i < directions.length; i++) {
    if (deg <= i * portion) {
      return directions[i];
    }
  }
};

const WindDisplay = ({ windData }) => {
  const units = <span>km/h</span>;
  return windData != null ? (
    <div className="windDisplay">
      <div className="speedDirection">
        <div className="speed">
          Speed: {windData.speed}
          {units}
        </div>
        &nbsp;
        <div className="direction">{degToDir(windData.deg)}</div>
      </div>
      <div className="gust">
        Gusts: {windData.gust}
        {units}
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default WindDisplay;
