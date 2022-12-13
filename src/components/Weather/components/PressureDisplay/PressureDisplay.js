import React from "react";
import Loading from "../../../lib/Loading";
import "./PressureDisplay.scss";

const PressureDisplay = ({ pressureData }) => {
  const { grnd_level, sea_level, pressure } = pressureData;
  return pressureData != null ? (
    <div className="pressureDisplay">
      {pressureData.grnd_level && (
        <div className="ground">Grnd: {grnd_level}hpa</div>
      )}
      {sea_level ? (
        <div className="sea">Sea: {sea_level || pressure}hpa</div>
      ) : (
        <div className="main">{pressure}hpa</div>
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default PressureDisplay;
