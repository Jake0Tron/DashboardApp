import {
  AirPollutionWeather,
  CurrentWeather,
  ForecastWeather,
} from "./components/Weather";
import "./App.css";

/* TODO: 
  - Set up a series of small widgets
    - various weather things
    - news?
      - set keywords for interests?
  - Drag/drop UI arrangement for widgets

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

function App() {
  return (
    <div className="App">
      <CurrentWeather />
      <ForecastWeather />
      <AirPollutionWeather />
    </div>
  );
}

export default App;
