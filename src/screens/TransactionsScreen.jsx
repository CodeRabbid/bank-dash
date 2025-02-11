import "./TransactionsScreen.css";
import React from "react";
import CreditCard from "../components/CreditCard.jsx";
import MyExpense from "../components/MyExpense.jsx";
import RecentTransactions from "../components/RecentTransactions.jsx";

export default function TransactionsScreen() {
  return (
    <>
      <div className="wrapper">
        <div className="box my-cards">
          <div className="top-banner">
            <h2>My Cards</h2>
            <h3>+ Add Card</h3>
          </div>
          <div className="cards">
            <CreditCard theme="dark-blue" />
            <CreditCard theme="light" />
          </div>
        </div>
        <div className="box my-expense">
          <div className="top-banner">
            <h2>My Expense</h2>
          </div>
          <div className="bar-chart-frame">
            <div className="my-expense-container">
              <MyExpense />
            </div>
          </div>
        </div>
        <div className="box recent-transactions">
          <div className="top-banner">
            <h2>Recent Transactions</h2>
          </div>
          <div className="recent-transactions-tabs">
            <RecentTransactions />
          </div>
        </div>
      </div>
    </>
  );
}
