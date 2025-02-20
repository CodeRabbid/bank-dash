import "./FourTiles.css";
import Tile from "../Common/Tile.jsx";
import BalanceIcon from "../../assets/balance-icon.svg";
import SavingIcon from "../../assets/saving-icon.svg";
import IncomeIcon from "../../assets/income-icon.svg";
import ExpenseIcon from "../../assets/expense-icon.svg";

export default function FourTiles() {
  return (
    <div className="four-tiles">
      <div className="two-tiles">
        <Tile title={"My Balance"} amount={5600} Icon={BalanceIcon} />
        <Tile title={"Income"} amount={3460} Icon={IncomeIcon} />
      </div>
      <div className="two-tiles">
        <Tile title={"Expense"} amount={7920} Icon={ExpenseIcon} />
        <Tile title={"Total Saving"} amount={12500} Icon={SavingIcon} />
      </div>
    </div>
  );
}
