import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine.js";

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
        >
          Open-source code
        </a>
        by Isadora Seffair
      </div>
    </div>
  );
}

export default App;
