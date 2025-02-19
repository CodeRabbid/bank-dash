import "./CardExpenseStatistics.css";
import { PolarArea } from "react-chartjs-2";

const data = {
  labels: ["DBL Bank", "ABM Bank", "BRC Bank", "MCP Bank"],
  datasets: [
    {
      label: " ",
      data: [40, 35, 30, 25],
      backgroundColor: ["#16DBCC", "#FF82AC", "#FFBB38", "#4C78FF"],
      borderWidth: 0,
      offset: 0,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      align: "middle",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        color: "#718EBF",
      },
    },

    tooltip: {
      enabled: false,
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    r: {
      grid: { display: false },
      ticks: {
        display: false,
      },
    },
  },
};

export default function CardExpenseStatistics() {
  return (
    <div className="frame">
      <PolarArea options={options} data={data} />
    </div>
  );
}
