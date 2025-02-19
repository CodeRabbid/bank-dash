import { Line } from "react-chartjs-2";
import "chart.js/auto"; // ADD THIS
import "chartjs-adapter-moment";
import "chartjs-adapter-date-fns";

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const data = {
  datasets: [
    {
      data: [
        { x: 1451640483000, y: 11000 },
        { x: 1456824483000, y: 12000 },
        { x: 1472722083000, y: 21000 },
        { x: 1493630883000, y: 13000 },
        { x: 1504258083000, y: 27000 },
        { x: 1514798883000, y: 34000 },
        { x: 1527845283000, y: 21000 },
        { x: 1546334883000, y: 29000 },
        { x: 1559381283000, y: 25000 },
        { x: 1583054883000, y: 24000 },
        { x: 1601544483000, y: 16000 },
        { x: 1609320483000, y: 35000 },
      ],

      borderWidth: 1.5,
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
        unit: "year",
        displayFormats: {
          month: "YYYY",
        },
      },
      border: {
        display: false,
        dash: [2, 4],
      },
      grid: {
        display: false,
      },
      bounds: "ticks",
      ticks: {
        color: "#718EBF",
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
        callback: function (value) {
          return USDollar.format(value);
        },
      },
    },
  },
};

const MonthlyRevenue = () => {
  return (
    <div className="diagram-frame">
      <Line data={data} options={options} />
    </div>
  );
};

export default MonthlyRevenue;
