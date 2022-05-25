import React from "react";
import { Line } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

const ChartType = (props) => {
  const lineChartData = {
    labels: props.lables,
    datasets: [
      {
        data: props.data,
        backgroundColor: [
          "rgba(177, 208, 224, 0.5 )",
          "rgb(177, 208, 224)",
          "rgb(105, 152, 171)",
          "rgb(64, 104, 130)",
          "rgb(26, 55, 77 )",
        ],
        borderWidth: 0.5,
        fill: true,
        lineTension: 0.5,
        tension: 0.1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  if (props.type === "polarArea") {
    options.plugins.legend.display = true;
  }

  return (
    <div className="chart" style={{ margin: "50px" }}>
      {
        {
          bar: <Bar data={lineChartData} options={options} />,
          line: <Line data={lineChartData} options={options} />,
          polarArea: <PolarArea data={lineChartData} options={options} />,
        }[props.type]
      }
    </div>
  );
};
export default ChartType;
