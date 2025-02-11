import CredicCardsIcon from "../assets/credit-cards-icon.svg?react";
import PaypalIcon from "../assets/paypal-icon.svg?react";
import DollarIcon from "../assets/dollar-icon.svg?react";
import Transaction from "./Transaction";

const RecentTransactionsShort = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: 23,
      }}
    >
      <div
        className="transactions-table"
        style={{
          display: "table",
        }}
      >
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
  );
};

export default RecentTransactionsShort;
