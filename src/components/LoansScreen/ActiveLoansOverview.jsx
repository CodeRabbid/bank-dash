import "./ActiveLoansOverview.css";

const loans = [
  {
    sLNo: 1,
    loanAmount: 100000,
    leftToRepay: 40500,
    duration: 8,
    interestRate: 12,
    installement: 2000,
  },
  {
    sLNo: 2,
    loanAmount: 500000,
    leftToRepay: 250000,
    duration: 36,
    interestRate: 10,
    installement: 8000,
  },
  {
    sLNo: 3,
    loanAmount: 900000,
    leftToRepay: 40500,
    duration: 12,
    interestRate: 12,
    installement: 5000,
  },
  {
    sLNo: 4,
    loanAmount: 50000,
    leftToRepay: 40500,
    duration: 25,
    interestRate: 5,
    installement: 2000,
  },
  {
    sLNo: 5,
    loanAmount: 50000,
    leftToRepay: 40500,
    duration: 5,
    interestRate: 16,
    installement: 10000,
  },
  {
    sLNo: 6,
    loanAmount: 80000,
    leftToRepay: 25000,
    duration: 14,
    interestRate: 8,
    installement: 2000,
  },
  {
    sLNo: 7,
    loanAmount: 12000,
    leftToRepay: 5500,
    duration: 9,
    interestRate: 13,
    installement: 500,
  },
  {
    sLNo: 8,
    loanAmount: 160000,
    leftToRepay: 100800,
    duration: 3,
    interestRate: 12,
    installement: 900,
  },
];

const zeroPad = (num, places) => String(num).padStart(places, "0");
const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

export default function ActiveLoansOverview() {
  return (
    <div className="frame">
      <table>
        <tr>
          <th className="hide-on-small-screen">SL No</th>
          <th>Loan Amount</th>
          <th>Left to repay</th>
          <th className="hide-on-small-screen">Duration</th>
          <th className="hide-on-small-screen">Interest rate</th>
          <th className="hide-on-small-screen">Installment</th>
          <th>Repay</th>
        </tr>
        {loans.map((loan) => (
          <tr>
            <td className="hide-on-small-screen">
              {zeroPad(loan.sLNo, 2)}
              {"."}
            </td>
            <td>{USDollar.format(loan.loanAmount)}</td>
            <td>{USDollar.format(loan.leftToRepay)}</td>
            <td className="hide-on-small-screen">
              {loan.duration}
              {" months"}
            </td>
            <td className="hide-on-small-screen">
              {loan.interestRate}
              {" %"}
            </td>
            <td className="hide-on-small-screen">
              {USDollar.format(loan.installement)}
              {" / month"}
            </td>
            <td>
              <button>Repay</button>
            </td>
          </tr>
        ))}
        <tr className="total">
          <td className="hide-on-small-screen">Total</td>
          <td>
            <p className="hide-on-large-screen">Total</p>
            {USDollar.format(125000)}
          </td>
          <td>
            <br className="hide-on-large-screen" />
            {USDollar.format(750000)}
          </td>
          <td className="hide-on-small-screen"></td>
          <td className="hide-on-small-screen"> </td>
          <td className="hide-on-small-screen">
            {USDollar.format(50000)}
            {" / month"}
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}
