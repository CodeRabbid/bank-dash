import React, { useState } from "react";
import RecentTransactionsTabs from "./RecentTransactionsTabs.jsx";
import RecentTransactionsTable from "../components/RecentTransactionsTable.jsx";

export default function RecentTransactions() {
  const [tab, setTab] = useState("all");

  return (
    <div>
      <div className="recent-transactions-tabs">
        <RecentTransactionsTabs tab={tab} setTab={setTab} />
      </div>
      <div className="recent-transactions-frame">
        <div className="recent-transactions-table-container">
          <RecentTransactionsTable tab={tab} />
        </div>
      </div>
    </div>
  );
}
