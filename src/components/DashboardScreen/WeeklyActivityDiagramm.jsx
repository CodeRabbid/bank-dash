import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        color: "#718EBF",
      },
    },
    datalabels: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 10,
      right: 5,
      bottom: 15,
      left: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#718EBF",
      },
    },
    y: {
      ticks: {
        stepSize: 100,
        color: "#718EBF",
      },
    },
  },
};

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const data = {
  labels,

  datasets: [
    {
      label: "Withdraw",
      data: [488, 360, 325, 490, 155, 395, 400],
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      backgroundColor: "#1814F3",
      borderColor: "#1814F3",
      borderWidth: 1,
      maxBarThickness: 9,
      borderRadius: 10,
      borderSkipped: false,
    },
    {
      label: "Deposit",
      data: [275, 127, 270, 370, 254, 255, 361],
      barPercentage: 0.8,
      categoryPercentage: 0.6,
      backgroundColor: "#16DBCC",
      borderColor: "#16DBCC",
      borderWidth: 1,
      maxBarThickness: 9,
      borderRadius: 10,
      borderSkipped: false,
    },
  ],
};

const WeeklyActicityDiagram = () => {
  return <Bar options={options} data={data} />;
};

export default WeeklyActicityDiagram;
