import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface AUMOLineChartProps{
  disableChartSubtitle: boolean;
  hasCardTitle: boolean;
  subtitle?: string;
  title?: string;
  isIncrease?: boolean;
  changeValue?: string;
}

const AUMOLineChart: React.FC<AUMOLineChartProps> = ({disableChartSubtitle, hasCardTitle, subtitle, title, isIncrease, changeValue}:AUMOLineChartProps ) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        
      },
      title: {
        display: disableChartSubtitle,
        text: subtitle,
        align: 'start' as const,
        font: {
            size: 18,
            family: 'Poppins',
            weight: '500',
            lineHeight: '28px'
        },
        padding: 24
      },
      tooltip: {
        enabled: true
      },
    },
    elements: {
      line:{
          tension: 0.5
      },
      point: {
        pointStyle: false as const,
      }
    },
    scales: {
        x: {
            grid: {
              display: false
            }
        }
    },
    chartArea: {
      backgroundColor: 'rgba(251, 85, 85, 0.4)'
    }
  };
  
  const labels = ['1', '5', '10', '15', '20', '25', '30'];
  
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: [10, 50, 100, 20, 17, 43, 93],
        borderColor: 'rgb(14, 88, 57)',
        backgroundColor: 'rgba(14, 88, 57, 0.5)',
        fill: false
      },
    ],
  };
  return (
    <div>
      {hasCardTitle && 
        <div className='chart-card-title'>
            <div className="sub-title">{subtitle}</div>
            <div className="title">{title} <span className={isIncrease ? 'positive' : 'negative'}>{changeValue}</span> </div>
        </div>
      }
      <Line options={options} data={data} />;
    </div>
  );
}

export default AUMOLineChart
