import { useState } from "react";
import { Bar } from "react-chartjs-2";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function DebitCreditOverview() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "rectRounded",
          color: "#718EBF",
        },
      },
      datalabels: {
        display: false,
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
        max: 850,
        display: false,
      },
    },
  };

  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  const data = {
    labels,

    datasets: [
      {
        label: "Debit",
        data: [500, 400, 380, 800, 550, 580, 650],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
        backgroundColor: "#1A16F3",
        borderWidth: 0,
        maxBarThickness: 17,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
        label: "Credit",
        data: [850, 700, 500, 450, 800, 390, 700],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
        backgroundColor: "#FCAA0B",
        borderWidth: 0,
        maxBarThickness: 17,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };
  return (
    <div style={{ position: "relative" }}>
      {getWindowWidth() > 630 ? (
        <div style={{ position: "absolute", fontSize: 11.5, color: "#718EBF" }}>
          <span style={{ color: "#333B69" }}>$7,560</span> Debited &{" "}
          <span style={{ color: "#333B69" }}>$5,420</span> Credited in this Week
        </div>
      ) : (
        <></>
      )}
      <Bar options={options} data={data} />
    </div>
  );
}
