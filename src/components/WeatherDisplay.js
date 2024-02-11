import React, { useState } from 'react';
import './weatherdisplay.css';
const WeatherDisplay = ({ weather }) => {
  const [unit, setUnit] = useState('C');

  const convertToFahrenheit = (celsius) => (celsius * 9/5) + 32;
  
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };
  if (!weather) return null;
  const displayTemperature = unit === 'C' ? weather.main.temp : convertToFahrenheit(weather.main.temp);
  const tempicon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className='weatherinfo'>
      <p className='cityname'>{weather.name}</p>
      <div className="content">
        <div className="left-side">
        <img src={tempicon} alt="Weather icon" className="weather-icon" />
      <p className='temp'> {displayTemperature.toFixed(1)}°{unit}</p>
      <button className='btn btn-secondary' onClick={toggleUnit}>Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius' }</button>
      
      </div>
       
        <div className="right-side">
      <p>Weather: {weather.weather[0].description}</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>Pressure: {weather.main.pressure} hPa</p>
      <p> Humidity: {weather.main.humidity} %</p>
    </div>
    </div>
      </div>
  );
};

export default WeatherDisplay;
