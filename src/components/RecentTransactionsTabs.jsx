import "./RecentTransactionsTabs.css";

export default function RecentTransactionsTabs({ tab, setTab }) {
  return (
    <div className="recent-transactions-tab-frame">
      <button
        className={
          "recent-transactions-tab-button " + (tab === "all" ? "active" : "")
        }
        onClick={() => setTab("all")}
        style={{ color: tab === "all" ? "#1814F3" : "#718EBF" }}
      >
        All Transactions
      </button>
      <button
        className={
          "recent-transactions-tab-button " + (tab === "income" ? "active" : "")
        }
        onClick={() => setTab("income")}
        style={{ color: tab === "income" ? "#1814F3" : "#718EBF" }}
      >
        Income
      </button>
      <button
        className={
          "recent-transactions-tab-button " +
          (tab === "expense" ? "active" : "")
        }
        onClick={() => setTab("expense")}
        style={{ color: tab === "expense" ? "#1814F3" : "#718EBF" }}
      >
        Expense
      </button>
      <div className="recent-transactions-tab-indicator"></div>
    </div>
  );
}
