import "./RecentTransactionsShort.css";
import CredicCardsIcon from "../../assets/credit-cards-icon.svg?react";
import PaypalIcon from "../../assets/paypal-icon.svg?react";
import DollarIcon from "../../assets/dollar-icon.svg?react";

const RecentTransactionsShort = () => {
  return (
    <div className="recent-transactions-short">
      <div className="frame">
        <div>
          <Transaction
            memo="Deposit from my Card"
            date="28 January 2021"
            amount="-$850"
            positive={false}
            Logo={CredicCardsIcon}
            logoColor="#FFF5D9"
          />
          <Transaction
            memo="Deposit Paypal"
            date="25 January 2021"
            amount="+$2,500"
            positive={true}
            Logo={PaypalIcon}
            logoColor="#E7EDFF"
          />
          <Transaction
            memo="Jemi Wilson"
            date="21 January 2021"
            amount="+$5,400"
            positive={true}
            Logo={DollarIcon}
            logoColor="#DCFAF8"
          />
        </div>
      </div>
    </div>
  );
};

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

export default RecentTransactionsShort;
