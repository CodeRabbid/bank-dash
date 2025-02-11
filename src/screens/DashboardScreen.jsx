import "./DashboardScreen.css";
import React from "react";
import CreditCard from "../components/CreditCard.jsx";

export default function DashboardScreen() {
  return (
    <>
      <div className="wrapper">
        <div className="box my-cards">
          <div className="top-banner">
            <h2>My Cards</h2>
            <h3>See All</h3>
          </div>
          <div className="cards">
            <CreditCard theme="dark-blue" />
            <CreditCard theme="light" />
          </div>
        </div>
      </div>
    </>
  );
}
