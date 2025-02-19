import "./AccountsScreen.css";
import React from "react";
import BalanceIcon from "../../assets/balance-icon.svg";
import SavingIcon from "../../assets/saving-icon.svg";
import IncomeIcon from "../../assets/income-icon.svg";
import ExpenseIcon from "../../assets/expense-icon.svg";
import LastTransactions from "./LastTransactions.jsx";
import CreditCard from "../Common/CreditCard.jsx";
import DebitCreditOverview from "./DebitCreditOverview.jsx";
import InvoicesSent from "./InvoicesSent.jsx";
import SmallSection from "../Common/SmallSection.jsx";

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
        <div className="box last-transaction-section">
          <div className="top-banner">
            <h2>Last Transaction</h2>
          </div>
          <div className="last-transaction">
            <LastTransactions />
          </div>
        </div>
        <div className="box my-cards" style={{ maxWidth: 250 }}>
          <div className="top-banner">
            <h2>My Card</h2>
            <h3>See All</h3>
          </div>
          <div className="cards">
            <CreditCard theme="dark-blue" />
          </div>
        </div>
        <div className="box debit-credit-overview">
          <div className="top-banner">
            <h2>Debit & Credit Overview</h2>
          </div>
          <div className="box debit-credit-overview-frame">
            <DebitCreditOverview />
          </div>
        </div>
        <div className="box invoices-sent">
          <div className="top-banner">
            <h2>Invoice Sent</h2>
          </div>
          <InvoicesSent />
        </div>
      </div>
    </>
  );
}
