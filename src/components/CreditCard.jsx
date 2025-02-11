import CardChip from "../assets/card-chip.svg?react";
import CardChipDark from "../assets/card-chip-dark.svg?react";
import MasterCardLogo from "../assets/mastercard-logo.svg?react";
import MasterCardLogoDark from "../assets/mastercard-logo-dark.svg?react";

import "./CreditCard.css";

export default function CreditCard({ theme }) {
  return (
    <div className={`credit-card ${theme}`}>
      <div className="card-bottom"></div>
      <div className="card-top-content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div className="title" style={{ fontSize: 11 }}>
              Balance
            </div>
            <div style={{ fontSize: 17 }}>$5,756</div>
          </div>
          {theme === "light" ? (
            <CardChipDark style={{ width: 30, marginTop: -2 }} />
          ) : (
            <CardChip style={{ width: 30, marginTop: -2 }} />
          )}
        </div>
        <div style={{ display: "flex", margin: "22px 0px 0px 0px" }}>
          <div>
            <div className="title" style={{ fontSize: 10.1 }}>
              CARD HOLDER
            </div>
            <div
              style={{
                fontSize: 13,
                lineHeight: 1.5,
                fontWeight: 900,
              }}
            >
              Eddy Cusuma
            </div>
          </div>
          <div style={{ marginLeft: 41 }}>
            <div className="title" style={{ fontSize: 10.1 }}>
              VALID THRU
            </div>
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.5,
                fontWeight: 900,
              }}
            >
              12/22
            </div>
          </div>
        </div>
      </div>

      <div className="card-bottom-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0px 0px 0px",
          }}
        >
          <div
            style={{
              fontSize: 15.6,
              margin: "10px 0px 0px 0px",
            }}
          >
            3778 **** **** 1234
          </div>
          {theme === "light" ? (
            <MasterCardLogoDark
              style={{ width: 27, margin: "5px 0px 0px 0px" }}
            />
          ) : (
            <MasterCardLogo style={{ width: 27, margin: "5px 0px 0px 0px" }} />
          )}
        </div>
      </div>
    </div>
  );
}
