import "./DashboardScreen.css";
import React from "react";
import CreditCard from "../Common/CreditCard.jsx";
import RecentTransactionsShort from "./RecentTransactionsShort.jsx";
import WeeklyActicityDiagram from "./WeeklyActivity.jsx";
import ExpenseStatistics from "./ExpenseStatistics.js";
import QuickTransfers from "./QuickTransfers.jsx";
import BalanceHistory from "./BalanceHistory.jsx";

export default function DashboardScreen() {
  return (
    <>
      <div className="wrapper">
        <div className="box my-cards-section">
          <div className="top-banner">
            <h2>My Cards</h2>
            <h3>See All</h3>
          </div>
          <div className="cards">
            <CreditCard theme="dark-blue" />
            <CreditCard theme="light" />
          </div>
        </div>
        <div className="box recent-transactions-short-section">
          <div className="top-banner">
            <h2>Recent Transactions</h2>
          </div>
          <RecentTransactionsShort />
        </div>
        <div className="box weekly-activity-section">
          <div className="top-banner">
            <h2>Weekly Activity</h2>
          </div>
          <WeeklyActicityDiagram />
        </div>
        <div className="box expense-statistics-section">
          <div className="top-banner">
            <h2>Espense Statistics</h2>
          </div>
          <ExpenseStatistics />
        </div>
        <div className="box quick-transfer-section">
          <div className="top-banner">
            <h2>Quick Transfer</h2>
          </div>
          <QuickTransfers />
        </div>
        <div className="box balance-history-section">
          <div>
            <div className="top-banner">
              <h2>Balance History</h2>
            </div>
            <BalanceHistory />
          </div>
        </div>
      </div>
    </>
  );
}
