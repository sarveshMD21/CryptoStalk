import React from 'react'
import WaitingComponent from './WaitingComponent'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);



const DoubleLineChart = ({priceData1,priceData2,labelData1,labelData2}) => {
    // console.log(priceData1);
    // console.log(priceData2);
    // console.log(labelData1);
    // console.log(labelData2);

    const data={
        labels:labelData1,
        datasets: [
            {
              label: "Coin1",
              data: priceData1,
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: true,
            },
            {
              
                data: priceData2,
                borderColor: 'rgba(255, 0, 0, 1)',
                fill: true,
              },
          ],
      } 
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
            intersect: false,
            
          },
        },
        scales: {
          x: {
            display: true,
            grid: {
                color: 'rgba(255, 255, 255, 0.1)', // X-axis grid color
              },
          },
          y: {
            display: true,
          },
        },
        elements: {
          point: {
            radius: 0,
            hoverRadius: 4, 
            hitRadius: 10, 
            hoverBorderWidth: 2, 
          },
          line: {
            tension: 0.4,
          },
        },
      };

  return (
    <Line data={data} options={options}   />
  )
}

export default DoubleLineChart