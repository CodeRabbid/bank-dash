import "./Tile.css";

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const SmallSection = ({ title, amount, Icon }) => {
  return (
    <div className="tile">
      <div className="frame">
        <div>
          <img src={Icon} width={60} />
        </div>
        <div style={{ padding: 10 }}>
          <div className="title">{title}</div>
          <div className="amount">{USDollar.format(amount)}</div>
        </div>
      </div>
    </div>
  );
};

export default SmallSection;
