import "./InvoicesSent.css";
import AppleIcon from "../../assets/apple-icon.svg";
import YellowPersonIcon from "../../assets/yellow-person-icon.svg";
import PlaystationIcon from "../../assets/playstation-icon.svg";
import RedPersonIcon from "../../assets/red-person-icon.svg";

const InvoicesSent = () => {
  return (
    <div className="invoices-sent">
      <div className="frame">
        <div className="table">
          <InvoiceShort
            memo="Apple Store"
            date="5h ago"
            amount="$450"
            Logo={AppleIcon}
          />
          <InvoiceShort
            memo="Michael"
            date="2 days ago"
            amount="$160"
            Logo={YellowPersonIcon}
          />
          <InvoiceShort
            memo="Playstation"
            date="5 days ago"
            amount="$1085"
            Logo={PlaystationIcon}
          />
          <InvoiceShort
            memo="William"
            date="10 days ago"
            amount="$90"
            Logo={RedPersonIcon}
          />
        </div>
      </div>
    </div>
  );
};

const InvoiceShort = ({ memo, date, amount, Logo }) => {
  return (
    <div className="invoice-short">
      <div className="cell" style={{ width: 40 }}>
        {<img src={Logo} />}
      </div>
      <div className="cell" style={{ width: "100%" }}>
        <div className="title">{memo}</div>
        <div className="date">{date}</div>
      </div>
      <div className="cell" style={{ width: 46 }}>
        <div className="amount">{amount}</div>
      </div>
    </div>
  );
};

export default InvoicesSent;
