const InvoiceShort = ({ memo, date, amount, Logo }) => {
  return (
    <div
      style={{
        display: "table-row",
        height: 55,
      }}
    >
      <div
        style={{
          height: 40,
          width: 40,
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        {<img src={Logo} style={{ height: 40, width: 40 }} />}
      </div>
      <div
        style={{
          height: 40,
          width: "100%",
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <div
          style={{
            color: "#B1B1B1",
            fontSize: 14,
            margin: "4px 3px 3px 9px",
          }}
        >
          {memo}
        </div>
        <div
          style={{
            color: "#718EBF",
            fontSize: 13,
            margin: "0px 3px 3px 9px",
          }}
        >
          {date}
        </div>
      </div>
      <div
        style={{
          height: 40,
          width: 46,
          color: "#718EBF",
          fontSize: 13,
          display: "table-cell",
          verticalAlign: "middle",
        }}
      >
        <div style={{ display: "flex" }}>{amount}</div>
      </div>
    </div>
  );
};

export default InvoiceShort;
