import React, {useState, useEffect} from 'react';
import * as MUI from '@mui/material';

const fetchData = async () => {
  const pos = await getCurrentLocation()
  console.log('position acquired')
  const wData = await fetchWeatherData(pos.coords.latitude, pos.coords.longitude)
  console.log('Weather data acquired')
  return [pos, wData]
}

// TODO this could be a custom hook
const getCurrentLocation = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
    (pos) => {      
      resolve(pos)  
    },
    (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        reject(err)
    })
  })
}

const fetchWeatherData = async (lat, long) => {
  const resp = await fetch(`http://localhost:8080/weather?lat=${lat}&lon=${long}`)
  const data = await resp.json()
  return data
}

const Weather = () => {

  const [weatherData, setWeatherData] = useState('') ,
        [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (currentLocation !== null){
      fetchWeatherData(currentLocation.lat, currentLocation.long)
      .then((wData)=> { 
        setWeatherData(wData);
      });
    }
  }, [currentLocation])

  useEffect(() => {
    fetchData().then((res) => {
      const [pos, weather] = res;
      setCurrentLocation({lat: pos.coords.latitude, long: pos.coords.longitude});
      console.log(weather)
      setWeatherData(weather);
    });
  }, [])


  
  /*
   Maybe look at Google Maps API or something for rendering/location selection
    https://developers.google.com/maps/documentation/javascript

  build out components for: 
    - current weather
      - https://openweathermap.org/current#current_JSON
    - alerts
    - daily?
    - hourly? 

    see https://openweathermap.org/widgets-constructor for example styling
*/

  return (
  <div>
    <div> 
    {
      currentLocation != null 
        ? `Weather at ${currentLocation.lat}, ${currentLocation.long}`
        : "loading current location..."
    }
    </div>
    <pre>
      {
        weatherData !== null 
          ? `${JSON.stringify(weatherData).split(',').join('\n')}`
          : 'Fetching weather data...'
      }
    </pre>
  </div>
  )
}

export default Weather