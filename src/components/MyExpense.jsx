import { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function MyExpense() {
  const [datalables, setDatalabels] = useState([
    false,
    false,
    false,
    false,
    true,
    false,
  ]);
  const [bgColors, setBgColors] = useState([
    "#EDF0F7",
    "#EDF0F7",
    "#EDF0F7",
    "#EDF0F7",
    "#16DBCC",
    "#EDF0F7",
  ]);

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const options = {
    onClick: function (evt, activeElements, chart) {
      if (activeElements.length > 0) {
        const elementIndex = activeElements[0].index;

        const newDatalabels = [false, false, false, false, false, false];
        newDatalabels[elementIndex] = true;
        setDatalabels(newDatalabels);

        const newBgColors = [
          "#EDF0F7",
          "#EDF0F7",
          "#EDF0F7",
          "#EDF0F7",
          "#EDF0F7",
          "#EDF0F7",
        ];
        newBgColors[elementIndex] = "#16DBCC";
        setBgColors(newBgColors);

        this.update();
      }
    },

    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "end",
        display: datalables,
        formatter: function (value, context) {
          return USDollar.format(value);
        },
        color: "#343C6A",
      },
      tooltip: {
        enabled: false,
      },
    },
    layout: {
      padding: {
        top: 25,
        right: 10,
        bottom: 15,
        left: 10,
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#718EBF",
        },
      },
      y: {
        display: false,
      },
    },
  };

  const labels = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

  const data = {
    labels,

    datasets: [
      {
        label: "Withdraw",
        data: [7100, 13000, 7500, 3000, 12500, 7000],
        barPercentage: 0.8,
        categoryPercentage: 1,
        backgroundColor: bgColors,
        maxBarThickness: 55,
        borderRadius: 12,
        borderSkipped: false,
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
