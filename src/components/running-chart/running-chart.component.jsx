import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        }
      },
    ],
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        },
        ticks: {
          beginAtZero: true
        }
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        },
        ticks: { min: 3 },
      }
    ]
  }
};

const RunningChart = ({ title, items }) => {
  const data = {
    labels: ['ПН, 21', 'ВТ, 22', 'СР, 23', 'ЧТ, 24', 'ПТ, 25', 'СБ, 26'],
    datasets: [{
        label: 'Темп бега',
        type:'line',
        data: [6.38, 6.45, 5.56, 5.58, 5.58, 5.22],
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#EC932F',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-2'
      },{
        type: 'bar',
        label: 'Дистанция, км',
        data: [5.13, 4.06, 6.58, 4.14, 7.01, 10.30],
        fill: false,
        backgroundColor: '#71B37C',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      }]
  };
  
  data.labels = items[0];
  data.datasets[0].data = items[1];
  data.datasets[1].data = items[2];

  return (
    <div className="running-chart" style={{ width: '500px' }}>
      <h2>{title}</h2>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}

export default RunningChart;
