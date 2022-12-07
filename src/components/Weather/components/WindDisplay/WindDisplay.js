import React from "react";
import Loading from "../Loading";
import "./WindDisplay.css";

const WindDisplay = ({ windData }) => {
  const units = <span>km/h</span>;
  const deg = <span>&deg;</span>;
  return windData != null ? (
    <div className="windDisplay">
      <div className="speedDirection">
        <div className="speed">
          {windData.speed}
          {units}
        </div>
        &nbsp;@&nbsp;
        <div className="direction">
          {windData.deg}
          {/* TODO: translate degrees to direction */}
          {deg}
        </div>
      </div>
      <div className="gust">
        {windData.gust}
        {units}
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default WindDisplay;
