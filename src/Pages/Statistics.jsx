import { Pie } from 'react-chartjs-2';
import React, { useEffect, useRef } from 'react';

const PieChart = ({ data }) => {
    const chartRef = useRef(null);
    
    useEffect(() => {
      // Ensure the chart is destroyed when the component unmounts
      return () => {
        if (chartRef.current) {
          chartRef.current.chartInstance.destroy();
        }
      };
    }, []);
  
    return (
      <div className="w-1/2 mx-auto">
        <Pie ref={chartRef} data={data} />
      </div>
    );
  };
  

  
 

const Statistics = () => {

    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            data: [30, 40, 30],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };

    return (
        <div>
            <h2>im Statistics</h2>
            <PieChart data={data} />
        </div>
    );
};

export default Statistics;