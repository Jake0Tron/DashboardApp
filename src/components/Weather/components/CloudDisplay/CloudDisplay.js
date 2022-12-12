import React from "react";
import { Loading } from "../";
import "./CloudDisplay.scss";

const CloudDisplay = ({ cloudData }) => {
  return cloudData != null ? (
    <div className="cloudDisplay">Cloud cover: {cloudData.all}%</div>
  ) : (
    <Loading />
  );
};

export default CloudDisplay;
