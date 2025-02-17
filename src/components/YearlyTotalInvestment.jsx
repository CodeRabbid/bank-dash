import { Line } from "react-chartjs-2";

import "chart.js/auto"; // ADD THIS
import "chartjs-adapter-moment";
import "chartjs-adapter-date-fns";

const data = {
  labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
  datasets: [
    {
      data: [8000, 24000, 17000, 38000, 21000, 29500],
      backgroundColor: "transparent",
      borderColor: "#FCAA0B",
      borderWidth: 2,
      pointRadius: 4,
      pointBackgroundColor: "white",
      tension: 0,
    },
  ],
};
const options = {
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  elements: {
    // point: {
    //   radius: 0,
    // },
  },
  scales: {
    x: {
      border: {
        display: false,
        dash: [2, 4],
      },
      bounds: "ticks",
      ticks: {
        color: "#718EBF",
      },
      grid: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 40000,
      border: {
        display: false,
        dash: [2, 4],
      },
      ticks: {
        min: 0,
        stepSize: 10000,
        color: "#718EBF",
      },
    },
  },
};

const YearlyTotalInvestment = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default YearlyTotalInvestment;
