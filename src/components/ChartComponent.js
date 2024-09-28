import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
  // Check if data is defined and has the expected structure
  if (!data || !data.labels || !data.datasets) {
    return <div>Loading chart...</div>; // or some loading spinner
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'ETH/USDT Kline Data',
        data: data.datasets.map((dataset) => ({
          x: dataset.time, // Assuming your dataset has a 'time' field
          y: dataset.price, // Assuming your dataset has a 'price' field
        })),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>ETH/USDT Kline Data</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
