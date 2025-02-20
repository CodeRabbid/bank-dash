import "./TransactionsScreen.css";
import React from "react";
import CreditCard from "../Common/CreditCard.jsx";
import MyExpense from "./MyExpense.jsx";
import RecentTransactions from "./RecentTransactions.jsx";

export default function TransactionsScreen() {
  return (
    <>
      <div className="wrapper">
        <div className="box my-cards-section">
          <div className="top-banner">
            <h2>My Cards</h2>
            <h3>+ Add Card</h3>
          </div>
          <div className="cards">
            <CreditCard theme="dark-blue" />
            <CreditCard theme="light" />
          </div>
        </div>
        <div className="box my-expense-section">
          <div className="top-banner">
            <h2>My Expense</h2>
          </div>
          <MyExpense />
        </div>
        <div className="box recent-transactions-section">
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
