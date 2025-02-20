import "./RecentTransactionsTabs.css";

export default function RecentTransactionsTabs({ tab, setTab }) {
  return (
    <div className="recent-transactions-tabs">
      <button
        className={tab === "all" ? "button active" : "button"}
        onClick={() => setTab("all")}
        style={{ color: tab === "all" ? "#1814F3" : "#718EBF" }}
      >
        All Transactions
      </button>
      <button
        className={tab === "income" ? "button active" : "button"}
        onClick={() => setTab("income")}
        style={{ color: tab === "income" ? "#1814F3" : "#718EBF" }}
      >
        Income
      </button>
      <button
        className={tab === "expense" ? "button active" : "button"}
        onClick={() => setTab("expense")}
        style={{ color: tab === "expense" ? "#1814F3" : "#718EBF" }}
      >
        Expense
      </button>
      <div className="indicator"></div>
    </div>
  );
}
