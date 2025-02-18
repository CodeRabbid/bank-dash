import "./BankServicesList.css";
import BankLoansIcon from "../assets/bank-loans-icon.svg";
import ChekcingAccountsIcon from "../assets/checking-accounts-icon.svg";
import SavingsAccountsIcon from "../assets/savings-accounts-icon.svg";
import DebitAndCreditCardsIcon from "../assets/debit-and-scredit-cards-icon.svg";
import LifeInsuranceIcon from "../assets/life-insurance-icon-1.svg";

const services = [
  {
    icon: BankLoansIcon,
    title: "Business loans",
  },
  {
    icon: ChekcingAccountsIcon,
    title: "Checking accounts",
  },
  {
    icon: SavingsAccountsIcon,
    title: "Savings accounts",
  },
  {
    icon: DebitAndCreditCardsIcon,
    title: "Debit and credit cards",
  },
  {
    icon: LifeInsuranceIcon,
    title: "Life Insurance",
  },
  {
    icon: BankLoansIcon,
    title: "Business loans",
  },
];

export default function BankServicesList() {
  return (
    <>
      {services.map((service) => (
        <div className="frame">
          <table>
            <tr>
              <td rowSpan={2}>
                <img src={service.icon} width={45} />
              </td>
              <td className="title">{service.title}</td>
              <td className="title hide-on-small-screen">Lorem Ipsum</td>
              <td className="title hide-on-small-screen">Lorem Ipsum</td>
              <td className="title hide-on-small-screen">Lorem Ipsum</td>
              <td rowSpan={2}>
                <button>View Details</button>
              </td>
            </tr>
            <tr>
              <td className="description">It is a long establishment</td>
              <td className="description hide-on-small-screen">
                Many publishing
              </td>
              <td className="description hide-on-small-screen">
                Many publishing
              </td>
              <td className="description hide-on-small-screen">
                Many publishing
              </td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}
