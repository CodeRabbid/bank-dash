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

export default MiddleSection;
