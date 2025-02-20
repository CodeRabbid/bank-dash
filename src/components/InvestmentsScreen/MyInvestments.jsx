import MyInvestment from "./MyInvestment";
import AppleRoundedSquare from "../../assets/apple-rounded-square.svg";
import GoogleRoundedSquare from "../../assets/google-rounded-square.svg";
import TeslaRoundedSquare from "../../assets/tesla-rounded-square.svg";

export default function MyInvestments() {
  return (
    <div className="my-investments">
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
  );
}
