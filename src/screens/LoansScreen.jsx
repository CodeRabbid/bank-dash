import "./LoanScreen.css";
import SmallSection from "../components/SmallSection";
import BusinessLoansIcon from "../assets/business-loans-icon.svg";
import CorporateLoansIcon from "../assets/corporate-loans-icon.svg";
import CustomLoansIcon from "../assets/custom-loans-icon.svg";
import PersonalLoansIcon from "../assets/personal-loans-icon.svg";
import ActiveLoansOverview from "../components/ActiveLoansOverview";

export default function LoansScreen() {
  return (
    <div className="wrapper">
      <div className="box four-small-sections">
        <div className="two-small-sections">
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
        </div>
      </div>
      <div className="box active-loans-overview-sections">
        <div className="top-banner">
          <h2>Active Loans Overview</h2>
        </div>
        <div className="active-loans-overview">
          <ActiveLoansOverview />
        </div>
      </div>
    </div>
  );
}
