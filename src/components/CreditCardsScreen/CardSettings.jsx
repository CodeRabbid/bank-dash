import "./CardSettings.css";
import React from "react";
import BlockCard from "../../assets/block-card.svg";
import ChangePinIcon from "../../assets/change-pin-icon.svg";
import GooglePlayIcon from "../../assets/google-play-icon.svg";
import ApplePayIcon from "../../assets/apple-pay-icon.jpg";

const settings = [
  {
    icon: BlockCard,
    title: "Block Card",
    description: "Instantly block your card",
  },
  {
    icon: ChangePinIcon,
    title: "Change Pin Code",
    description: "Choose another pin code",
  },
  {
    icon: GooglePlayIcon,
    title: "Add to Google Play",
    description: "Withdraw without any card",
  },
  {
    icon: ApplePayIcon,
    title: "Add to Apple Pay",
    description: "Withdraw without any card",
  },
  {
    icon: ApplePayIcon,
    title: "Add to Apple Store",
    description: "Withdraw without any card",
  },
];

export default function CardSettings() {
  return (
    <div className="card-settings">
      <div className="frame">
        <table>
          <tbody>
            {settings.map((setting) => (
              <>
                <tr>
                  <td rowSpan="2">
                    <img src={setting.icon} alt="" width={50} />
                  </td>
                  <td className="title">{setting.title}</td>
                </tr>
                <tr>
                  <td className="description">{setting.description}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
