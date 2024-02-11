import React, { useState } from "react";
import pic from "./logo.png";
import StateChart from "./stateanalysis";
import "./header.css";
const Header = ({ onSearch, statesShow, setStatesShow }) => {
  const [city, setCity] = useState("");
  // const [showChart, setShowChart] = useState(false);

  const onShowState = () => {
    setStatesShow(true);
  };
  const onNotShowState = () => {
    setStatesShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  };

  return (
    <header className="header">
      <div className="pic">
        <img src={pic} alt="weatherpic" />
      </div>
      <p className="title">Weather App</p>
      <div>
        <button onClick={onNotShowState} className="state-analysis-btn">
          Home
        </button>
        <button onClick={onShowState} className="state-analysis-btn">
          State Analysis
        </button>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="searchdiv">
          <input
            type="text"
            value={city}
            placeholder="Search city..."
            onChange={(e) => setCity(e.target.value)}
            className="search-input"
          />

          <button type="submit" className="searchbtn btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
