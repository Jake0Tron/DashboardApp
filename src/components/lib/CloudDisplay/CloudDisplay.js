import React from "react";
import "./CloudDisplay.css";
import { Loading } from "../";

const CloudDisplay = ({ cloudData }) => {
  return cloudData != null ? (
    <div className="cloudDisplay">Cloud cover: {cloudData.all}%</div>
  ) : (
    <Loading />
  );
};

export default CloudDisplay;
