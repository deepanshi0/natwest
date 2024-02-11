import React from "react";
import { Line } from "react-chartjs-2";

const ChartDisplay = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Temperature",
        data: data.map((item) => item.temp),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ChartDisplay;
