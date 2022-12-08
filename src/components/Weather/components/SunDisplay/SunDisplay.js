import React from "react";
import { getTimeFromDate } from "../../util";
import Loading from "../../../lib/Loading";
import "./SunDisplay.css";

const SunDisplay = ({ sunData }) => {
  return sunData != null ? (
    <div className="sunDisplay">
      <div className="sunrise">Sunrise: {getTimeFromDate(sunData.sunrise)}</div>
      <div className="sunset">Sunset: {getTimeFromDate(sunData.sunset)}</div>
    </div>
  ) : (
    <Loading />
  );
};

export default SunDisplay;
