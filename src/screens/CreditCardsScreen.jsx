import "./CreditCardsScreen.css";
import React from "react";
import CreditCard from "../components/CreditCard";
import CardExpenseStatistics from "../components/CardExpenseStatistics";

export default function CreditCardsScreen() {
  return (
    <>
      <div className="box three-cards-section">
        <div className="top-banner">
          <h2>My Cards</h2>
        </div>
        <div className="cards">
          <CreditCard theme="light-blue" />
          <CreditCard theme="dark-blue" />
          <CreditCard theme="light" />
        </div>
      </div>
      <div className="wrapper">
        <div className="box card-expese-statistics-section">
          <div className="top-banner">
            <h2>Card Expense Statistics</h2>
          </div>
          <div className="card-expense-statistics">
            <CardExpenseStatistics />
          </div>
        </div>
      </div>
    </>
  );
}
