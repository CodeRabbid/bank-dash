const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const SmallSection = ({ title, amount, Icon }) => {
  return (
    <>
      <div className="small-section-frame">
        <div>
          <img src={Icon} width={60} />
        </div>
        <div style={{ padding: 10 }}>
          <div className="small-section-title">{title}</div>
          <div className="small-section-amount">{USDollar.format(amount)}</div>
        </div>
      </div>
    </>
  );
};

export default SmallSection;
