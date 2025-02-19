import "./LastTransactions.css";
import SpotifyIcon from "../../assets/spotify-icon.svg";
import MobileServiceIcon from "../../assets/mobile-service-icon.svg";
import PersonIcon from "../../assets/person-icon.svg";

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export default function LastTransactions() {
  return (
    <div className="frame">
      <LastTransaction
        icon={SpotifyIcon}
        title={"Spotify Subscription"}
        date={"25 Jan 2025"}
        type={"Shopping"}
        card={"1234 ****"}
        status={"Pending"}
        amount={-150}
      />
      <LastTransaction
        icon={MobileServiceIcon}
        title={"Mobile Service"}
        date={"25 Jan 2025"}
        type={"Service"}
        card={"1234 ****"}
        status={"Completed"}
        amount={-340}
      />
      <LastTransaction
        icon={PersonIcon}
        title={"Emilly Wilson"}
        date={"25 Jan 2025"}
        type={"Transfer"}
        card={"1234 ****"}
        status={"Completed"}
        amount={780}
      />
    </div>
  );
}

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

const LastTransaction = ({ icon, title, date, type, card, status, amount }) => {
  return (
    <div className="transaction" style={{ maxWidth: 700 }}>
      <div className="cell last-transaction-icon">
        <img src={icon} width={50} />
      </div>
      <div
        className="cell description"
        style={{ width: getWindowWidth() > 630 ? "30%" : "70%" }}
      >
        <div className="title">{title}</div>
        <div className="date">{date}</div>
      </div>
      {getWindowWidth() > 630 ? (
        <>
          <div className="cell type">{type}</div>
          <div className="cell card">{card}</div>
          <div className="cell status">{status}</div>
        </>
      ) : (
        <></>
      )}
      <div
        className="cell amount"
        style={{ color: amount < 0 ? "#FE5C73" : "#16DBAA" }}
      >
        {USDollar.format(amount)}
      </div>
    </div>
  );
};
