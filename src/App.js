import "./styles.css";
import WeatherAPI from "./components/WeatherAPI";
import Weather from "./components/Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Update</h1>
      <h2>Edit to see some magic happen!</h2>

      {console.log(process.env.REACT_APP_BASEURL)}
    </div>
  );
}
