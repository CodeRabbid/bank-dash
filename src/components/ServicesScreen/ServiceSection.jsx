import "./ServiceSection.css";

const ServiceSection = ({ title, amount, Icon }) => {
  return (
    <div className="service-section frame">
      <div>
        <img src={Icon} width={60} />
      </div>
      <div style={{ padding: 10 }}>
        <div className="title">{title}</div>
        <div className="description">{amount}</div>
      </div>
    </div>
  );
};

export default ServiceSection;
