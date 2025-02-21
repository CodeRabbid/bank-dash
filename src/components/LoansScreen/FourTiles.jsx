import "./FourTiles.css";
import Tile from "../Common/Tile";
import BusinessLoansIcon from "../../assets/business-loans-icon.svg";
import CorporateLoansIcon from "../../assets/corporate-loans-icon.svg";
import CustomLoansIcon from "../../assets/custom-loans-icon.svg";
import PersonalLoansIcon from "../../assets/personal-loans-icon.svg";

export default function FourTiles() {
  return (
    <div className="four-tiles">
      <div className="two-tiles">
        <Tile
          title={"Personal Loans"}
          amount={50000}
          Icon={PersonalLoansIcon}
        />
        <Tile
          title={"Corporate Loans"}
          amount={100000}
          Icon={CorporateLoansIcon}
        />
      </div>
      <div className="two-tiles">
        <Tile
          title={"Business Loans"}
          amount={500000}
          Icon={BusinessLoansIcon}
        />
        <Tile title={"Custom Loans"} amount={100000} Icon={CustomLoansIcon} />
      </div>
    </div>
  );
}
