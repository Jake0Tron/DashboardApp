import React from "react";
import "./CloudDisplay.css";

/**
 * Cloudiness, %
 */
const CloudDisplay = ({ cloudData }) => {
  return cloudData != null ? (
    <div className="cloudDisplay">Cloudiness: {cloudData.all}%</div>
  ) : (
    <div>Loading...</div>
  );
};

export default CloudDisplay;
