import "./MyInvestment.css";
import React from "react";

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export default function MyInvestment({
  Icon,
  title,
  type,
  amount,
  return_value,
}) {
  return (
    <div className="frame">
      <table>
        <tbody>
          <tr>
            <td rowSpan={2}>
              <img
                src={Icon}
                width={45}
                height={45}
                style={{ padding: "3px 7px 0px 0px", margin: 0 }}
              />
            </td>
            <td className="title">{title}</td>
            <td className="amount">{USDollar.format(amount)}</td>
            <td
              className="return-value"
              style={{ color: return_value >= 0 ? "#16DBAA" : "#FE5C73" }}
            >
              {return_value >= 0 ? "+" : ""}
              {return_value}
              {"%"}
            </td>
          </tr>
          <tr>
            <td className="type">{type}</td>
            <td className="investment-value-text">Investment Value</td>
            <td className="return-value-text">Return Value</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
