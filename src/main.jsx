import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen.jsx";
import TransactionsScreen from "./screens/TransactionsScreen.jsx";
import AccountsScreen from "./screens/AccountsScreen.jsx";
import InvestmentsScreen from "./screens/InvestmentsScreen.jsx";
import CreditCardsScreen from "./screens/CreditCardsScreen.jsx";
import LoansScreen from "./screens/LoansScreen.jsx";
import ServicesScreen from "./screens/ServicesScreen.jsx";
import MyPrivilegesScreen from "./screens/MyPrivilegesScreen.jsx";
import SettingsScreen from "./screens/SettingsScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<DashboardScreen />} />
      <Route path="/transactions" element={<TransactionsScreen />} />
      <Route path="/accounts" element={<AccountsScreen />} />
      <Route path="/investments" element={<InvestmentsScreen />} />
      <Route path="/creditcards" element={<CreditCardsScreen />} />
      <Route path="/loans" element={<LoansScreen />} />
      <Route path="/services" element={<ServicesScreen />} />
      <Route path="/privileges" element={<MyPrivilegesScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <>Hello World</>
  </React.StrictMode>
);
