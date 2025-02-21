import "./ServicesScreen.css";

import BankServicesList from "./BankServicesList";
import ThreeTiles from "./ThreeTiles";

export default function ServicesScreen() {
  return (
    <div>
      <div className="wrapper">
        <div className="box three-serivce-tiles-section">
          <ThreeTiles />
        </div>
        <div className="box bank-services-list-section">
          <div className="top-banner">
            <h2>Bank Services List</h2>
          </div>
          <BankServicesList />
        </div>
      </div>
    </div>
  );
}
