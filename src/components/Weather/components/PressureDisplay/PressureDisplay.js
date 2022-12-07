import React from "react";
import Loading from "../Loading";
import "./PressureDisplay.css";

const PressureDisplay = ({ pressureData }) => {
  return pressureData != null ? (
    <div className="pressureDisplay">
      {pressureData.grnd_level && (
        <div className="ground">Grnd: {pressureData.grnd_level}hpa</div>
      )}
      {pressureData.sea_level ? (
        <div className="sea">
          Sea: {pressureData.sea_level || pressureData.pressure}hpa
        </div>
      ) : (
        <div className="main">{pressureData.pressure}hpa</div>
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default PressureDisplay;
