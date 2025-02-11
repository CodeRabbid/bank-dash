import "./DashboardScreen.css";
import React from "react";
import CreditCard from "../components/CreditCard.jsx";
import RecentTransactionsShort from "../components/RecentTransactionsShort.jsx";
import WeeklyActicityDiagram from "../components/WeeklyActivityDiagramm";
import ExpenseStatisticsChart from "../components/ExpenseStatisticsChart";
import QuickTransfers from "../components/QuickTransfers";

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
        <div className="box recent-transactions">
          <div className="top-banner">
            <h2>Recent Transactions</h2>
          </div>
          <RecentTransactionsShort />
        </div>
        <div className="box weekly-activity">
          <div className="top-banner">
            <h2>Weekly Activity</h2>
          </div>
          <div className="bar-chart-frame">
            <div className="bar-chart-container">
              <WeeklyActicityDiagram />
            </div>
          </div>
        </div>
        <div className="box expense-statistics">
          <div className="top-banner">
            <h2>Espense Statistics</h2>
          </div>
          <div className="pie-chart-frame">
            <div className="pie-chart-container">
              <ExpenseStatisticsChart />
            </div>
          </div>
        </div>
        <div className="box quick-transfer">
          <div>
            <div className="top-banner">
              <h2>Quick Transfer</h2>
            </div>
            <div className="quick-transfer-frame">
              <div className="quick-transfer-container">
                <QuickTransfers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
