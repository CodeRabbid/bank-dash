import "./AccountsScreen.css";
import React from "react";
import BalanceIcon from "../assets/balance-icon.svg";
import SavingIcon from "../assets/saving-icon.svg";
import IncomeIcon from "../assets/income-icon.svg";
import ExpenseIcon from "../assets/expense-icon.svg";
import LastTransactions from "../components/LastTransactions";

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export default function AccountsScreen() {
  return (
    <>
      <div className="wrapper">
        <div className="box four-small-sections">
          <div className="two-small-sections">
            <SmallSection
              title={"My Balance"}
              amount={5600}
              Icon={BalanceIcon}
            />
            <SmallSection title={"Income"} amount={3460} Icon={IncomeIcon} />
          </div>
          <div className="box two-small-sections">
            <SmallSection title={"Expense"} amount={7920} Icon={ExpenseIcon} />
            <SmallSection
              title={"Total Saving"}
              amount={12500}
              Icon={SavingIcon}
            />
          </div>
        </div>
        <div className="box last-transaction" style={{ maxWidth: 700 }}>
          <div className="top-banner">
            <h2>Last Transaction</h2>
          </div>
          <LastTransactions />
        </div>
      </div>
    </>
  );
}

const SmallSection = ({ title, amount, Icon }) => {
  return (
    <>
      <div className="small-section-frame">
        <div>
          <img src={Icon} width={60} />
        </div>
        <div style={{ padding: 10 }}>
          <div className="small-section-title">{title}</div>
          <div className="small-section-amount">{USDollar.format(amount)}</div>
        </div>
      </div>
    </>
  );
};
