import "./AccountsScreen.css";
import React from "react";
import LastTransactions from "./LastTransactions.jsx";
import CreditCard from "../Common/CreditCard.jsx";
import DebitCreditOverview from "./DebitCreditOverview.jsx";
import InvoicesSent from "./InvoicesSent.jsx";

import FourTiles from "./FourTiles.jsx";

export default function AccountsScreen() {
  return (
    <>
      <div className="wrapper">
        <div className="box four-tiles-section">
          <FourTiles />
        </div>
        <div className="box last-transaction-section">
          <div className="top-banner">
            <h2>Last Transaction</h2>
          </div>
          <LastTransactions />
        </div>
        <div className="box my-card-section">
          <div className="top-banner">
            <h2>My Card</h2>
            <h3>See All</h3>
          </div>
          <div className="cards">
            <CreditCard theme="dark-blue" />
          </div>
        </div>
        <div className="box debit-credit-overview-section">
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
