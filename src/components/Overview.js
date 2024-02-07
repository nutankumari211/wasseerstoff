import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = () => {
  const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Data',
        data: [10, 20, 30],
        backgroundColor: ['red', 'blue', 'green'],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ChartComponent;
