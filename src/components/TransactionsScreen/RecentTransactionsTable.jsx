import "./RecentTransactionsTable.css";
import { DataGrid } from "@mui/x-data-grid";
import ArrowUp from "../../assets/arrow-down.svg?react";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width;
}

const USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const columns = [
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 130,
    sortable: false,
    renderCell: (params) => (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <ArrowUp
            style={{
              minWidth: 30,
              margin: "5px 5px 5px 0px",
              rotate: params.value.up ? "0deg" : "180deg",
            }}
          />
          {params.value.desc}
        </div>
      </>
    ),
  },
  {
    field: "transactionID",
    headerName: "Transaction ID",
    flex: 0.6,
    minWidth: 120,
  },
  { field: "type", headerName: "Type", flex: 0.5, minWidth: 80 },
  {
    field: "card",
    headerName: "Card",
    flex: 0.6,
    minWidth: 80,
  },
  {
    field: "date",
    headerName: "Date",
    sortable: true,
    flex: 0.6,
    minWidth: 120,
    renderCell: (params) => {
      const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      const date = new Date(params.value);
      return <>{date.toLocaleDateString("en-US", options)}</>;
    },
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 0.5,
    minWidth: 80,
    renderCell: (params) => {
      return (
        <div style={{ color: params.value > 0 ? "#16DBAA" : "#FE5C73" }}>
          {USDollar.format(params.value)}
        </div>
      );
    },
  },
  {
    field: "receipt",
    headerName: "Receipt",
    sortable: false,
    flex: 0.5,
    minWidth: 130,
    renderCell: () => {
      return <button className="receipt-button">Download</button>;
    },
  },
];

const rows = [
  {
    id: 1,
    description: {
      up: false,
      desc: "Spotify Subscription",
    },
    transactionID: "#12548796",
    type: "Subscription",
    card: "1234 ****",
    date: 1738067433000,
    amount: -2500,
    receipt: 0,
  },
  {
    id: 2,
    description: {
      up: true,
      desc: "Freepik Sales",
    },
    transactionID: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: 1737801633000,
    amount: 750,
    receipt: 0,
  },
  {
    id: 3,
    description: {
      up: false,
      desc: "Mobile Service",
    },
    transactionID: "#12548796",
    type: "Services",
    card: "1234 ****",
    date: 1737369633000,
    amount: -150,
    receipt: 0,
  },
  {
    id: 4,
    description: {
      up: true,
      desc: "Wilson",
    },
    transactionID: "#12548796",
    type: "Private",
    card: "1234 ****",
    date: 1736954973000,
    amount: 1050,
    receipt: 0,
  },
  {
    id: 5,
    description: {
      up: true,
      desc: "Emilly",
    },
    transactionID: "#12548796",
    type: "Private",
    card: "1234 ****",
    date: 1736851233000,
    amount: 840,
    receipt: 0,
  },
  {
    id: 6,
    description: {
      up: false,
      desc: "Car repair",
    },
    transactionID: "#12548796",
    type: "Transport",
    card: "1234 ****",
    date: 1736515233000,
    amount: -1600,
    receipt: 0,
  },
  {
    id: 7,
    description: {
      up: false,
      desc: "Netflix Subscription",
    },
    transactionID: "#12548796",
    type: "Subscription",
    card: "1234 ****",
    date: 1736411433000,
    amount: -70,
    receipt: 0,
  },
  {
    id: 8,
    description: {
      up: true,
      desc: "Jennifer",
    },
    transactionID: "#12548796",
    type: "Private",
    card: "1234 ****",
    date: 1736272233000,
    amount: 1200,
    receipt: 0,
  },
  {
    id: 9,
    description: {
      up: false,
      desc: "Walmart",
    },
    transactionID: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: 1735827633000,
    amount: -168,
    receipt: 0,
  },
];

export default function RecentTransactionsTable({ tab }) {
  const paginationModel = { page: 0, pageSize: 5 };

  const hiddenFields = ["transactionID", "type", "card", "date", "receipt"];
  const showCols = columns.filter(
    (column) => !hiddenFields.includes(column.field) || getWindowWidth() > 630
  );

  const showRows = rows.filter((row) => {
    if (tab === "all") {
      return true;
    } else if (tab === "income") {
      return row.amount > 0;
    } else if (tab === "expense") {
      return row.amount < 0;
    } else {
      return true;
    }
  });

  return (
    <DataGrid
      disableRowSelectionOnClick
      rows={showRows}
      columns={showCols}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      rowHeight={55}
      sx={{
        "& .MuiDataGrid-columnHeader": {
          color: "#718EBF",
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: "inherit",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "solid 1px #F2F4F7",
          // add more css for customization
        },
        border: "none",
      }}
    />
  );
}
