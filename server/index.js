const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const port = 8080;
const fs = require("fs");

const { getTrimmedLatLon } = require("./utils");

let WEATHER_API_KEY, NEWS_API_KEY;

app.use(cors(), bodyParser.json());

// Get API key for weather
fs.readFile("./WEATHER_API_KEY.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  WEATHER_API_KEY = data;
});

fs.readFile("./NEWS_API_KEY.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  NEWS_API_KEY = data;
});

// Serve build directory statically for deployment
app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/**
 * TODO:
 * possibly cache results based on availability?
 * split up endpoint logic into their own directories and import
 */

//================================
// WEATHER
//================================

app.get("/weather", async (req, res) => {
  const { lat, lon } = getTrimmedLatLon(req);
  console.info("weather fetching for", req.query);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  const response = await fetch(url).catch((e) => {
    console.error(e);
    res.send(e);
  });

  const data = await response.json();

  res.send(data);
});

//  * https://openweathermap.org/forecast5
app.get("/forecast", async (req, res) => {
  const { lat, lon } = getTrimmedLatLon(req);
  console.info(`forecast fetching for ${lat}, ${lon}`);

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;

  const response = await fetch(url).catch((e) => {
    console.error(e);
    res.send(e);
  });

  const data = await response.json();

  res.send(data);
});

// * https://openweathermap.org/api/weathermaps
app.get("/weather-map", async (req, res) => {
  const { lat, lon } = getTrimmedLatLon(req);

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  // TODO: Look into displaying weather data via
  // https://github.com/google/maps-for-work-samples/blob/master/samples/maps/OpenWeatherMapLayer/OpenWeatherMapLayer.pdf
  const response = await fetch(url).catch((e) => {
    console.error(e);
    res.send(e);
  });

  const data = await response.json();

  res.send(data);
});

// * https://openweathermap.org/api/air-pollution
app.get("/air-pollution", async (req, res) => {
  const { lat, lon } = getTrimmedLatLon(req);

  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
  // TODO: Historical
  // http://api.openweathermap.org/data/2.5/air_pollution/history?lat={lat}&lon={lon}&start={start}&end={end}&appid={API key}

  const response = await fetch(url).catch((e) => {
    console.error(e);
    res.send(e);
  });

  const data = await response.json();

  res.send(data);
});

// * https://openweathermap.org/api/geocoding-api
// app.get("", (req, res) => {});

//================================
// NEWS
//================================
app.get("/news", async (req, res) => {
  // TODO look into searches: https://newsapi.org/docs/get-started#search
  const { topics } = req.query;
  console.log(`fetching news for ${topics}`);

  const date = new Date(); // TODO

  var url =
    "https://newsapi.org/v2/everything?" +
    `q=${topics}&` +
    "from=2022-12-07&" +
    "sortBy=popularity&" +
    `apiKey=${NEWS_API_KEY}`;

  const response = await fetch(url).catch((e) => {
    console.error(e);
    res.send(e);
  });

  const data = await response.json();

  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
