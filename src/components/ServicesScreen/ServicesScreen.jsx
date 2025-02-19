import "./ServicesScreen.css";
import ServiceSection from "./ServiceSection";
import LifeInsuranceIcon from "../../assets/life-insurance-icon.svg";
import ShoppingIcon from "../../assets/shopping-icon.svg";
import SafetyIcon from "../../assets/safety-icon.svg";
import BankServicesList from "./BankServicesList";

export default function ServicesScreen() {
  return (
    <div>
      <div className="wrapper">
        <div className="box three-small-sections">
          <ServiceSection
            title={"Life Insurance"}
            amount={"Unlimited protection"}
            Icon={LifeInsuranceIcon}
          />
          <ServiceSection
            title={"Shopping"}
            amount={"Buy. Think. Grow."}
            Icon={ShoppingIcon}
          />
          <ServiceSection
            title={"Safety"}
            amount={"We are your allies"}
            Icon={SafetyIcon}
          />
        </div>
        <div className="box bank-services-list-sections">
          <div className="top-banner">
            <h2>Bank Services List</h2>
          </div>

          <BankServicesList />
        </div>
      </div>
    </div>
  );
}
