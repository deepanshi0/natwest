import React, { useState } from "react";
import CityTemperaturesChart from "./CityTemperaturesChart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { jsonData } from "./states";
// import './state.css'
const getColorFromTemperature = (temp) => {
  const minTemp = 0;
  const maxTemp = 50;
  const red = Math.round(((temp - minTemp) / (maxTemp - minTemp)) * 255);
  const blue = 255 - red;
  return `rgb(${red}, 0, ${blue})`;
};


const StateChart = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleBarClick = (data) => {
    setSelectedState(data.name);
  };

  const stateDataArray = Object.entries(jsonData).map(
    ([stateName, stateInfo]) => {
      return {
        name: stateName,
        avgTemp: stateInfo.avg_temp_state,
        population: stateInfo.size,
      };
    }
  );

  return (
    <div className="charts-container">
      <ResponsiveContainer className="chart" width={1200} height={300}>
        <BarChart
          data={stateDataArray}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avgTemp" fill="#8884d8" onClick={handleBarClick}>
            {stateDataArray.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColorFromTemperature(entry.avgTemp)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      {selectedState && <CityTemperaturesChart stateName={selectedState} />}
    </div>
  );
};
export default StateChart;
