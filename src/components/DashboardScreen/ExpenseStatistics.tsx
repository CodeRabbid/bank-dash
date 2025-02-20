import "./ExpenseStatistics.css";
import { Chart as ChartJS } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ChartDataLabels);

const data = {
  labels: ["Entertainment", "Bill Expenses", "Others", "Investment"],
  datasets: [
    {
      label: " ",
      data: [30, 15, 35, 20],
      backgroundColor: ["#343C6A", "#FC7900", "#1814F3", "#FA00FF"],
      borderWidth: 0,
      offset: 8,
      hoverOffset: 23,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  aspectRatio: 1,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      align: "start" as const,
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
      formatter: (value: any, ctx: any) => {
        const datapoints = ctx.chart.data.datasets[0].data;
        const total = datapoints.reduce(
          (total: any, datapoint: any) => total + datapoint,
          0
        );
        const percentage = (value / total) * 100;
        return percentage.toFixed(0) + "%";
      },
      color: "#fff",
    },
  },
};

const ExpenseStatistics = () => {
  return (
    <div className="expense-statistics">
      <div className="frame">
        <Pie options={options} data={data} />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
