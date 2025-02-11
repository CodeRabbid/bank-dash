import { Line } from "react-chartjs-2";
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
import "chart.js/auto"; // ADD THIS
import "chartjs-adapter-moment";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const data = {
  datasets: [
    {
      data: [
        { x: 1719868573000, y: 120 },
        { x: 1721078173000, y: 330 },
        { x: 1723324573000, y: 240 },
        { x: 1724620573000, y: 480 },
        { x: 1726002973000, y: 420 },
        { x: 1727817373000, y: 790 },
        { x: 1730668573000, y: 200 },
        { x: 1732655773000, y: 580 },
        { x: 1735161373000, y: 230 },
        { x: 1736889373000, y: 650 },
        { x: 1738278973000, y: 600 },
      ],
      backgroundColor: (context) => {
        const bgColor = ["rgba(0, 0, 255, 0.3)", "rgba(0, 0, 255, 0)"];
        if (!context.chart.chartArea) {
          return;
        }
        const {
          ctx,
          data,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, bgColor[0]);
        gradientBg.addColorStop(1, bgColor[1]);
        return gradientBg;
      },
      borderColor: "blue",
      borderWidth: 1.5,
      fill: true,
      tension: 0.5,
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
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "month",
        displayFormats: {
          month: "MMM",
        },
      },
      border: {
        display: false,
        dash: [2, 4],
      },
      bounds: "ticks",
      ticks: {
        color: "#718EBF",
      },
    },
    y: {
      min: 0,
      max: 800,
      border: {
        display: false,
        dash: [2, 4],
      },
      ticks: {
        min: 0,
        stepSize: 200,
        color: "#718EBF",
      },
    },
  },
};

const BalanceHistory = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default BalanceHistory;
