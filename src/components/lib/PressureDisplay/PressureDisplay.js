import React from "react";
import "./PressureDisplay.css";

const PressureDisplay = ({ pressureData }) => {
  return pressureData != null ? (
    <div className="pressureDisplay">
      {/* <div className="">{pressureData.pressure}hpa</div> */}
      <div className="">Grnd: {pressureData.grnd_level}hpa</div>
      <div className="">Sea: {pressureData.sea_level}hpa</div>
    </div>
  ) : (
    <div> Loading... </div>
  );
};

export default PressureDisplay;
