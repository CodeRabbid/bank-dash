import "./LoanScreen.css";
import SmallSection from "../Common/Tile";

import ActiveLoansOverview from "./ActiveLoansOverview";
import FourTiles from "./FourTiles";

export default function LoansScreen() {
  return (
    <div className="wrapper">
      <div className="box four-tiles-section">
        <FourTiles />
      </div>
      <div className="box active-loans-overview-sections">
        <div className="top-banner">
          <h2>Active Loans Overview</h2>
        </div>

        <ActiveLoansOverview />
      </div>
    </div>
  );
}
