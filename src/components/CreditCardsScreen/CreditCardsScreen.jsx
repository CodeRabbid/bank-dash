import "./CreditCardsScreen.css";
import React from "react";
import CreditCard from "../Common/CreditCard";
import CardListItem from "./CardListItem";
import CardExpenseStatistics from "./CardExpenseStatistics";
import BlueCardRoundedSquare from "../../assets/blue-card-rounded-square.svg";
import RedCardRoundedSquare from "../../assets/red-card-rounded-square.svg";
import YellowCardRoundedSquare from "../../assets/yellow-card-rounded-square.svg";
import AddNewCard from "./AddNewCard";
import CardSettings from "./CardSettings";

export default function CreditCardsScreen() {
  return (
    <div className="credit-card-screen">
      <div className="box three-cards-section">
        <div className="top-banner">
          <h2>My Cards</h2>
        </div>
        <div className="cards">
          <CreditCard theme="light-blue" />
          <CreditCard theme="dark-blue" />
          <CreditCard theme="light" />
        </div>
      </div>
      <div className="wrapper">
        <div className="box card-expese-statistics-section">
          <div className="top-banner">
            <h2>Card Expense Statistics</h2>
          </div>
          <div className="card-expense-statistics">
            <CardExpenseStatistics />
          </div>
        </div>
        <div className="box card-list-section">
          <div className="top-banner">
            <h2>Card List</h2>
          </div>
          <div className="card-list">
            <CardListItem
              icon={BlueCardRoundedSquare}
              card_type={"Secondary"}
              bank={"DBL Bank"}
              card_number={"**** **** 5600"}
              name_on_card={"WIlliam"}
            />
            <CardListItem
              icon={RedCardRoundedSquare}
              card_type={"Secondary"}
              bank={"BRC Bank"}
              card_number={"**** **** 4300"}
              name_on_card={"Michel"}
            />
            <CardListItem
              icon={YellowCardRoundedSquare}
              card_type={"Secondary"}
              bank={"ABM Bank"}
              card_number={"**** **** 7560"}
              name_on_card={"Edward"}
            />
          </div>
        </div>
        <div className="box add-new-card-section">
          <div className="top-banner">
            <h2>Add New Card</h2>
          </div>
          <AddNewCard />
        </div>
        <div className="box card-settings-section">
          <div className="top-banner">
            <h2>Card Settings</h2>
          </div>
          <CardSettings />
        </div>
      </div>
    </div>
  );
}
