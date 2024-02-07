import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ datasetLabel, data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    buildChart();
    return () => {
      destroyChart();
    };
  }, []); //// eslint-disable-next-line react-hooks/exhaustive-deps

  const buildChart = () => {
    const myChartRef = chartRef.current.getContext('2d');
    chartInstance = new Chart(myChartRef, {
      type: 'scatter', 
      data: {
        datasets: [{
          label: datasetLabel,
          data: data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color for dots
          borderColor: 'rgba(75, 192, 192, 1)', // Border color for dots
          pointRadius: 5, // Adjust dot size
          pointHoverRadius: 7, // Adjust dot size on hover
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear', // Specify x-axis type
            position: 'bottom',
            title: {
              display: true,
              text: 'X Axis'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Y Axis'
            }
          }
        }
      }
    });
  };

  const destroyChart = () => {
    if (chartInstance) {
      chartInstance.destroy(); // Destroy the existing chart instance
    }
  };

  return <canvas ref={chartRef} />;
};

export default BarChart;
