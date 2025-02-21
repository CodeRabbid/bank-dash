import "./ThreeTiles.css";
import LifeInsuranceIcon from "../../assets/life-insurance-icon.svg";
import ShoppingIcon from "../../assets/shopping-icon.svg";
import SafetyIcon from "../../assets/safety-icon.svg";

export default function ThreeTiles() {
  return (
    <>
      <ServiceTile
        title={"Life Insurance"}
        amount={"Unlimited protection"}
        Icon={LifeInsuranceIcon}
      />
      <ServiceTile
        title={"Shopping"}
        amount={"Buy. Think. Grow."}
        Icon={ShoppingIcon}
      />
      <ServiceTile
        title={"Safety"}
        amount={"We are your allies"}
        Icon={SafetyIcon}
      />
    </>
  );
}

const ServiceTile = ({ title, amount, Icon }) => {
  return (
    <div className="service-section">
      <div className="frame">
        <div>
          <img src={Icon} width={60} />
        </div>
        <div style={{ padding: 10 }}>
          <div className="title">{title}</div>
          <div className="description">{amount}</div>
        </div>
      </div>
    </div>
  );
};
