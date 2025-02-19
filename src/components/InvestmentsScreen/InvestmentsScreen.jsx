import "./InvestmentScreen.css";
import MoneyBagIcon from "../../assets/money-bag-icon.svg";
import StatsIcon from "../../assets/stats-icon.svg";
import ArrowsIcon from "../../assets/arrows-icon.svg";
import YearlyTotalInvestment from "./YearlyTotalInvestment";
import MonthlyRevenue from "./MonthlyRevenue";
import MyInvestment from "./MyInvestment";
import AppleRoundedSquare from "../../assets/apple-rounded-square.svg";
import GoogleRoundedSquare from "../../assets/google-rounded-square.svg";
import TeslaRoundedSquare from "../../assets/tesla-rounded-square.svg";
import TrendingStock from "./TrendingStock";
import MiddleSection from "./MiddleSection";

import React from "react";
const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});
export default function InvestmentsScreen() {
  return (
    <div>
      <div className="wrapper">
        <div className="box three-small-sections">
          <MiddleSection
            title={"Total Invested Amount"}
            amount={USDollar.format(150000)}
            Icon={MoneyBagIcon}
          />
          <MiddleSection
            title={"Number of Investments"}
            amount={"1,250"}
            Icon={StatsIcon}
          />
          <MiddleSection
            title={"Total Invested Amount"}
            amount={"+5.80%"}
            Icon={ArrowsIcon}
          />
        </div>
        <div className="box balance-history">
          <div className="top-banner">
            <h2>Yearly Total Investment</h2>
          </div>
          <div className="diagram-frame">
            <YearlyTotalInvestment />
          </div>
        </div>
        <div className="box balance-history">
          <div className="top-banner">
            <h2>Monthly Revenue</h2>
          </div>
          <div className="diagram-frame">
            <MonthlyRevenue />
          </div>
        </div>
        <div className="box my-investment-section">
          <div className="top-banner">
            <h2>My Investment</h2>
          </div>
          <div className="my-investment">
            <MyInvestment
              Icon={AppleRoundedSquare}
              title={"Apple Store"}
              type={"E-commerce, Marketplace"}
              amount={54000}
              return_value={16}
            />{" "}
            <MyInvestment
              Icon={GoogleRoundedSquare}
              title={"Samsung Mobile"}
              type={"E-commerce, Marketplace"}
              amount={25300}
              return_value={-4}
            />{" "}
            <MyInvestment
              Icon={TeslaRoundedSquare}
              title={"Tesla Motors"}
              type={"Electric Vehicles"}
              amount={8200}
              return_value={25}
            />
          </div>
        </div>
        <div className="box trending-stock-section">
          <div className="top-banner">
            <h2>Trending Stock</h2>
          </div>
          <div className="trending-stock">
            <TrendingStock />
          </div>
        </div>
      </div>
    </div>
  );
}
