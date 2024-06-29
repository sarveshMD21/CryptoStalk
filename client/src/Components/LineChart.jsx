import React from 'react'
import WaitingComponent from './WaitingComponent'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


const LineChart = ({priceData,labelData,loading}) => {
    
  const data={
    labels:labelData,
    datasets: [
        {
          
          data: priceData,
          borderColor: 'rgba(75, 192, 192, 1)',
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
   <div>
    {loading&&<WaitingComponent label="preparing your chart"/>}
    {!loading&&<div className='w-full h-full dark:bg-slate-800 overflow-hidden'>
        <Line data={data} options={options}  width="w-scrren" height="h-screen" />;
    </div>}
    
   </div>
  )
}

export default LineChart