import "./AddNewCard.css";
import React from "react";

export default function AddNewCard() {
  return (
    <div className="add-new-card">
      <div className="frame">
        <p className="disclaimer">
          Credit Card generally means a plastic card issued by Scheduled
          Commercial Banks assigned to a Cardholder, with a credit limit, that
          can be used to purchase goods and services on credit or obtain cash
          advances.
        </p>
        <form action="submit">
          <div className="inputs-container">
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="card-type">Card Type</label>
              </div>
              <div className="input-frame">
                <input type="text" id="card-type" placeholder="Classic" />
              </div>
            </div>
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="name-on-card">Name On Card</label>
              </div>
              <div className="input-frame">
                <input
                  type="text"
                  id="name-on-card"
                  placeholder="Max Mustermann"
                />
              </div>
            </div>
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="card-number">Card Number</label>
              </div>
              <div className="input-frame">
                <input
                  type="text"
                  id="card-number"
                  placeholder="**** **** **** ****"
                />
              </div>
            </div>
            <div className="input-container">
              <div className="label-container">
                <label htmlFor="expiration-date">Expiration Date</label>
              </div>
              <div className="input-frame">
                <input
                  type="text"
                  id="expiration-date"
                  placeholder="January 2025"
                />
              </div>
            </div>
          </div>
          <button className="add-card" type="submit">
            Add Card
          </button>
        </form>
      </div>
    </div>
  );
}
