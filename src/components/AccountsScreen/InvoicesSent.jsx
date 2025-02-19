import AppleIcon from "../../assets/apple-icon.svg";
import YellowPersonIcon from "../../assets/yellow-person-icon.svg";
import PlaystationIcon from "../../assets/playstation-icon.svg";
import RedPersonIcon from "../../assets/red-person-icon.svg";
import InvoiceShort from "./InvoiceShort";

const InvoicesSent = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: 23,
      }}
    >
      <div
        style={{
          display: "table",
        }}
      >
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
  );
};

export default InvoicesSent;
