import React, { useState, useEffect } from "react";
import useCurrentLocation from "../../../hooks/useCurrentLocation";
import { Carousel, Loading } from "../components";
import "./ForecastWeather.scss";

const fetchWeatherData = async (lat, long) => {
  const resp = await fetch(
    `http://localhost:8080/forecast?lat=${lat}&lon=${long}`
  );
  const data = await resp.json();
  return data;
};

const ForecastWeather = () => {
  const currentLocation = useCurrentLocation();
  const [forecastData, setForecastData] = useState(null);
  useEffect(() => {
    if (currentLocation) {
      fetchWeatherData(
        currentLocation.latitude,
        currentLocation.longitude
      ).then((weather) => {
        setForecastData(weather);
      });
    }
  }, [currentLocation]);

  return forecastData != null ? (
    <div className="container forecastWeather">
      <div className="name">{forecastData.city.name} Forecast</div>
      <Carousel carouselData={forecastData.list} />
    </div>
  ) : (
    <Loading />
  );
};

export default ForecastWeather;
