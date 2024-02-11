import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {jsonData} from './states'; 
import './state.css';
const CityTemperaturesChart = ({ stateName }) => {
  const citiesData = Object.entries(jsonData[stateName].cities).map(([cityName, cityInfo]) => ({
    name: cityName,
    minTemp: cityInfo.min_temp,
    maxTemp: cityInfo.max_temp,
  }));

  return (
    <div>

    <ResponsiveContainer className="chart1" width={1000} height={400}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid />
        <XAxis type="category"  name="City" />
        <YAxis type="number" name="Temperature" unit="°C" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Min Temperature" data={citiesData} fill="blue" shape="circle" dataKey="minTemp" />
        <Scatter name="Max Temperature" data={citiesData} fill="red" shape="triangle" dataKey="maxTemp" />
      </ScatterChart>
    </ResponsiveContainer>
    </div>
  );
};


export default CityTemperaturesChart;
