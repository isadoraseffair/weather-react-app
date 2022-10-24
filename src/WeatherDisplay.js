import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import SearchEngine from "./SearchEngine";

function WeatherDisplay(props) {
  if (props.city !== null) {
    return (
      <div className="mainInfo">
        <div className="cityName">{props.city}</div>
        <ul className="forecastListing">
          <li>
            <span className="descriptionInfo">Temperature:</span>{" "}
            {Math.round(props.temperature)}ºC
          </li>
          <li>
            <span className="descriptionInfo">Description:</span>{" "}
            {props.description}
          </li>
          <li>
            <span className="descriptionInfo">Humidity:</span> {props.humidity}%
          </li>
          <li>
            <span className="descriptionInfo">Wind:</span>{" "}
            {Math.round(props.wind)}km/h
          </li>
        </ul>
        <div className="weatherIcon">
          <ReactAnimatedWeather
            icon="RAIN"
            color="#668ba4"
            size="80px"
            animate="true"
          />
        </div>
      </div>
    );
  } else {
    return <div className="cityName">Hello </div>;
  }
}

export default WeatherDisplay;
