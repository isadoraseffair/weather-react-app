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
    </div>
  );
}

export default App;
