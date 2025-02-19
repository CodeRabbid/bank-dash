import "./MiddleSection.css";

const MiddleSection = ({ title, amount, Icon }) => {
  return (
    <div className="middle-section">
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

export default MiddleSection;
