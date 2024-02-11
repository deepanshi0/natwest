import React, { useState, useEffect } from "react";
import "./App.css";
// import WeatherForm from './components/WeatherForm';
import WeatherDisplay from "./components/WeatherDisplay";
import RecentSearches from "./components/RecentSearches";
import { fetchWeather } from "./api";
import Header from "./components/header";
import StateChart from "./components/stateanalysis";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [statesShow, setStatesShow] = useState(false);

  useEffect(() => {
    const searches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    setRecentSearches(searches);
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setRecentSearches((prevSearches) => {
        const updatedSearches = [...new Set([city, ...prevSearches])];
        return updatedSearches.slice(0, 5);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mainapp">
      <Header onSearch={handleSearch} statesShow={statesShow} setStatesShow={setStatesShow}/>
      {statesShow ? (
        <StateChart />
      ) : (
        <>
          <RecentSearches searches={recentSearches} onSearch={handleSearch} />
          <WeatherDisplay weather={weather} />
        </>
      )}
    </div>
  );
};

export default App;
