const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;

const API_KEY = '85d47c9ef88fa239046e9449dfa49367'

app.use(cors(), bodyParser.json());

/**
 * TODO: 
 * https://openweathermap.org/forecast5
 * https://openweathermap.org/api/weathermaps
 * https://openweathermap.org/api/air-pollution
 * https://openweathermap.org/api/geocoding-api
 */

app.get('/weather', async (req, res) => {
  const {lat, lon} = req.query;
  const trimLat = parseFloat(lat).toFixed(2)
  const trimLon = parseFloat(lon).toFixed(2)
  console.info('weather fetching for', req.query)
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${trimLat}&lon=${trimLon}&appid=${API_KEY}`
  
  const response = await fetch(url)
    .catch((e) => {
    console.error(e)
    res.send(e)
  })

  const data = await response.json();

  res.send(data)
})

/* TODO: fetch weather data:
    - 
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});