import React from "react";
import "./CardListItem.css";

export default function CardListItem({
  icon,
  card_type,
  bank,
  card_number,
  name_on_card,
}) {
  return (
    <div>
      <div className="frame">
        <table>
          <tr>
            <td rowSpan={2}>
              <img
                src={icon}
                width={45}
                height={45}
                style={{ padding: "3px 7px 0px 0px", margin: 0 }}
              />
            </td>
            <td className="title show-on-mobile">Card Type</td>
            <td className="title show-on-mobile">Bank</td>
            <td className="title hide-on-mobile">Card Number</td>
            <td className="title hide-on-mobile">Name on Card</td>
            <td className="view-details" rowSpan={2}>
              View Details
            </td>
          </tr>
          <tr>
            <td className="value">{card_type}</td>
            <td className="value">{bank}</td>
            <td className="value hide-on-mobile">{card_number}</td>
            <td className="value hide-on-mobile">{name_on_card}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
