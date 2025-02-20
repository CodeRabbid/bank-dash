import "./RecentTransactions.css";
import React, { useState } from "react";
import RecentTransactionsTabs from "./RecentTransactionsTabs.jsx";
import RecentTransactionsTable from "./RecentTransactionsTable.jsx";

export default function RecentTransactions() {
  const [tab, setTab] = useState("all");

  return (
    <div>
      <div className="recent-transactions-tabs">
        <RecentTransactionsTabs tab={tab} setTab={setTab} />
      </div>
      <div className="recent-transactions-table">
        <RecentTransactionsTable tab={tab} />
      </div>
    </div>
  );
}
