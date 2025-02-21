import "./LoanScreen.css";
import SmallSection from "../Common/Tile";

import ActiveLoansOverview from "./ActiveLoansOverview";
import FourTiles from "./FourTiles";

export default function LoansScreen() {
  return (
    <div className="wrapper">
      <div className="box four-tiles-section">
        <FourTiles />
        {/* <div className="two-small-sections">
          <SmallSection
            title={"Personal Loans"}
            amount={50000}
            Icon={PersonalLoansIcon}
          />
          <SmallSection
            title={"Corporate Loans"}
            amount={100000}
            Icon={CorporateLoansIcon}
          />
        </div>
        <div className="box two-small-sections">
          <SmallSection
            title={"Business Loans"}
            amount={500000}
            Icon={BusinessLoansIcon}
          />
          <SmallSection
            title={"Custom Loans"}
            amount={100000}
            Icon={CustomLoansIcon}
          />
        </div> */}
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
