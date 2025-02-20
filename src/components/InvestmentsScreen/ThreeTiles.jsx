import "./ThreeTiles.css";
import MoneyBagIcon from "../../assets/money-bag-icon.svg";
import StatsIcon from "../../assets/stats-icon.svg";
import ArrowsIcon from "../../assets/arrows-icon.svg";

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export default function ThreeTiles() {
  return (
    <div className="three-tiles">
      <Tile
        title={"Total Invested Amount"}
        amount={USDollar.format(150000)}
        Icon={MoneyBagIcon}
      />
      <Tile title={"Number of Investments"} amount={"1,250"} Icon={StatsIcon} />
      <Tile
        title={"Total Invested Amount"}
        amount={"+5.80%"}
        Icon={ArrowsIcon}
      />
    </div>
  );
}

const Tile = ({ title, amount, Icon }) => {
  return (
    <div className="tile">
      <div className="frame">
        <div>
          <img src={Icon} width={60} />
        </div>
        <div style={{ padding: 10 }}>
          <div className="title">{title}</div>
          <div className="amount">{amount}</div>
        </div>
      </div>
    </div>
  );
};
