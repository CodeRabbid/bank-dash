import "./InvestmentScreen.css";
import MoneyBagIcon from "../assets/money-bag-icon.svg";
import StatsIcon from "../assets/stats-icon.svg";
import ArrowsIcon from "../assets/arrows-icon.svg";

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
      </div>
    </div>
  );
}

const MiddleSection = ({ title, amount, Icon }) => {
  return (
    <div className="small-section-frame">
      <div>
        <img src={Icon} width={60} />
      </div>
      <div style={{ padding: 10 }}>
        <div className="small-section-title">{title}</div>
        <div className="small-section-amount">{amount}</div>
      </div>
    </div>
  );
};
