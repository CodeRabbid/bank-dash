import React from "react";
import "./TrendingStock.css";

const data = [
  { SLNo: 1, Name: "Trivago", Price: 520, Return: 5 },
  { SLNo: 2, Name: "Canon", Price: 480, Return: 10 },
  { SLNo: 3, Name: "Uber Food", Price: 350, Return: -3 },
  { SLNo: 4, Name: "Nokia", Price: 940, Return: 2 },
  { SLNo: 5, Name: "Tiktok", Price: 670, Return: 12 },
];

const zeroPad = (num, places) => String(num).padStart(places, "0");

export default function TrendingStock() {
  return (
    <div className="frame">
      <table>
        <thead>
          <tr>
            <th className="sl" width="1">
              SL No
            </th>
            <th className="name" width="*">
              Name
            </th>
            <th className="price" width="1">
              Price
            </th>
            <th className="return" width="1">
              Return
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock) => (
            <tr>
              <td className="values">
                {zeroPad(stock.SLNo, 2)}
                {"."}
              </td>
              <td className="values">{stock.Name}</td>
              <td className="values">{stock.Price}</td>
              <td
                className="values"
                style={{ color: stock.Return >= 0 ? "#16DBAA" : "#FE5C73" }}
              >
                {stock.Return >= 0 ? "+" : ""}
                {stock.Return}
                {"%"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
