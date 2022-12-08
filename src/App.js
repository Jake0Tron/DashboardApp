import {
  AirPollutionWeather,
  CurrentWeather,
  ForecastWeather,
} from "./components/Weather";
import { NewsFeed } from "./components/News";
import { AutoComplete } from "./components/lib";
import "./App.css";

/* TODO: 
  - Set up a series of small widgets
    - news?
      - set keywords for interests?
  - Drag/drop UI arrangement for widgets
  - Routing for individual widgets
  - Error handling for server fetch calls
  - Caching server data (determine caching strategy)
  - deploy to the internet!

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
      {/* <AirPollutionWeather /> */}
      <NewsFeed />
    </div>
  );
}

export default App;
