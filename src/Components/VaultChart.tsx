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
    Filler,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true
      },
    },
    elements: {
      line:{
          tension: 0.5
      }
    },
    scales: {
        x: {
            display: false,
            grid: {
              display: false
            }
        },
        y: {
            display: false,
            grid: {
              display: false
            }
        }
    }
  };
  
  export const labels = ['1', '5', '10', '15', '20', '25', '30'];

  interface VaultChartProps {
    name: string;
    aum: string;
    price: string;
    isIncrease: boolean;
    changePercent: string;
    
  }

const VaultChart: React.FC<VaultChartProps> = ({name, aum, price, isIncrease, changePercent}: VaultChartProps) => {
    const navigate = useNavigate();
    const data = {
        labels,
        datasets: [
          {
            label: '',
            data: [10, 30, 13, 20, 17, 43, 12],
            borderColor: isIncrease ? 'rgb(14, 88, 57)' : 'rgb(229, 62, 62)',
            backgroundColor: isIncrease ? 'rgba(14, 88, 57, 0.5)' : 'rgba(229, 62, 62, 0.5)',
            fill: true
          },
        ],
      };

  return (
    <Card className='vault-chart-card' onClick={() => navigate('/vault-detail')}>
        <Card.Body>
            <div className="chart-title-section">
                <div className="icon">
                    <Icon icon="material-symbols:circle" />
                </div>
                <div className="title">{name}</div>
            </div>
            <div className="chart-text">
                <div className="key">AUM</div>
                <div className="value">{aum}</div>
            </div>
            <div className="chart-text">
                <div className="key">Price</div>
                <div className="value">{price}/ index <span className={isIncrease ? 'price green' : 'price red'}>{changePercent}</span></div>
            </div>
            <div className="linechart">
                <Line options={options} data={data} />
            </div>
        </Card.Body>
    </Card>
  );
}

export default VaultChart
