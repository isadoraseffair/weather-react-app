import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

function SearchEngine() {
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [city, setCity] = useState("");
  let [inputCity, setInputCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(setInfo);
  }

  function provideCity(event) {
    setInputCity(event.target.value);
  }

  function setInfo(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCity(response.data.name);
  }

  return (
    <div className="App">
      <h1 className="heading">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="searchSpace"
          type="search"
          placeholder="Type a city"
          onChange={provideCity}
        />
        <input className="searchBtn" type="submit" value="Search" />
      </form>
      <WeatherDisplay
        city={city}
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
      />
    </div>
  );
}

export default SearchEngine;
