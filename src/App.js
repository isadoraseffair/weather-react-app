import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import SearchEngine from "./SearchEngine.js";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  return (
    <div>
      <SearchEngine />
      <div className="footer">
        <a
          className="link"
          href="https://github.com/isadoraseffair/weather-react-app"
          alt="GitHub Link"
          target="blank"
        >Open-source code
        </a>
         by Isadora Seffair
      </div>
    </div>
  );
}

export default App;
