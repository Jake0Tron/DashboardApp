import React from "react";
import "./Loading.scss";

/**
 *
 * @param {Object} - props
 *   types include:
 * <ul>
 *   <li>spinner</li>
 *   <li>bars</li>
 * </ul>
 */
const Loading = ({ animationType = "spinner" }) => {
  switch (animationType) {
    case "bars":
      return (
        <div className={`loading`}>
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
          <div className={`${animationType}`} />
        </div>
      );
    case "spinner":
    default:
      return <div className={`loading ${animationType}`}></div>;
  }
};

export default Loading;
