import "./CreditCardsScreen.css";
import React from "react";
import CreditCard from "../components/CreditCard";

export default function CreditCardsScreen() {
  return (
    <div className="wrapper">
      <div className="box three-cards">
        <div className="top-banner">
          <h2>My Cards</h2>
        </div>
        <div className="cards">
          <CreditCard theme="light-blue" />
          <CreditCard theme="dark-blue" />
          <CreditCard theme="light" />
        </div>
      </div>
    </div>
  );
}
