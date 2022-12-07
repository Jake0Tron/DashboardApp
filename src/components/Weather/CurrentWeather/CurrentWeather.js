import React, { useState, useEffect } from "react";
import {
  CloudDisplay,
  Loading,
  SunDisplay,
  TemperatureDisplay,
  WeatherTile,
  WindDisplay,
} from "../components";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import "./CurrentWeather.css";

const fetchWeatherData = async (lat, long) => {
  const resp = await fetch(
    `http://localhost:8080/weather?lat=${lat}&lon=${long}`
  );
  const data = await resp.json();
  return data;
};

const CurrentWeather = () => {
  const currentLocation = useCurrentLocation();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    if (currentLocation) {
      fetchWeatherData(
        currentLocation.latitude,
        currentLocation.longitude
      ).then((weather) => {
        setWeatherData(weather);
      });
    }
  }, [currentLocation]);

  return weatherData != null ? (
    <div className="container currentWeatherContainer">
      <div className="name">{weatherData.name}</div>
      <WeatherTile tileData={weatherData.weather[0]} />
      <TemperatureDisplay tempData={weatherData.main} />
      <WindDisplay windData={weatherData.wind} />
      <CloudDisplay cloudData={weatherData.clouds} />
      <SunDisplay sunData={weatherData.sys} />
    </div>
  ) : (
    <Loading animationType="bars" />
  );
};

export default CurrentWeather;
