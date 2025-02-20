import "./InvestmentScreen.css";
import YearlyTotalInvestment from "./YearlyTotalInvestment";
import MonthlyRevenue from "./MonthlyRevenue";
import TrendingStock from "./TrendingStock";
import ThreeTiles from "./ThreeTiles";
import MyInvestments from "./MyInvestments";

export default function InvestmentsScreen() {
  return (
    <div>
      <div className="wrapper">
        <div className="box three-tiles-section">
          <ThreeTiles />
        </div>
        <div className="box yearly-total-investment-section">
          <div className="top-banner">
            <h2>Yearly Total Investment</h2>
          </div>
          <YearlyTotalInvestment />
        </div>
        <div className="box monthly-revenue-section">
          <div className="top-banner">
            <h2>Monthly Revenue</h2>
          </div>
          <MonthlyRevenue />
        </div>
        <div className="box my-investments-section">
          <div className="top-banner">
            <h2>My Investments</h2>
          </div>
          <MyInvestments />
        </div>
        <div className="box trending-stock-section">
          <div className="top-banner">
            <h2>Trending Stock</h2>
          </div>
          <TrendingStock />
        </div>
      </div>
    </div>
  );
}
