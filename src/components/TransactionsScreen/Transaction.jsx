import "./Transaction.css";

const Transaction = ({ memo, date, amount, positive, Logo, logoColor }) => {
  return (
    <div className="table-row">
      <div className="first-cell">
        <div
          className="round-icon"
          style={{
            backgroundColor: logoColor,
          }}
        >
          {<Logo style={{ height: 20, width: 20 }} />}
        </div>
      </div>
      <div className="second-cell">
        <div className="flex-container">
          <div className="memo">{memo}</div>
          <div className="date">{date}</div>
        </div>
      </div>
      <div
        className="third-cell"
        style={{
          color: positive ? "#41D4A8" : "#FF4B4A",
        }}
      >
        <div style={{ display: "flex" }}>{amount}</div>
      </div>
    </div>
  );
};

export default Transaction;
