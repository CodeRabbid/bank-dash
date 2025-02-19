import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import DashboardScreen from "./components/DashboardScreen/DashboardScreen.jsx";
import TransactionsScreen from "./components/TransactionsScreen/TransactionsScreen.jsx";
import AccountsScreen from "./components/AccountsScreen/AccountsScreen.jsx";
import InvestmentsScreen from "./components/InvestmentsScreen/InvestmentsScreen.jsx";
import CreditCardsScreen from "./components/CreditCardsScreen/CreditCardsScreen.jsx";
import LoansScreen from "./components/LoansScreen/LoansScreen.jsx";
import ServicesScreen from "./components/ServicesScreen/ServicesScreen.jsx";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen.jsx";
import EditProfileScreen from "./components/SettingsScreen/EditProfileScreen.jsx";
import PreferencesScreen from "./components/SettingsScreen/PreferencesScreen.jsx";
import SecurityScreen from "./components/SettingsScreen/SecurityScreen.jsx";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="" element={<App />}>
      <Route index={true} path="" element={<DashboardScreen />} />
      <Route path="transactions" element={<TransactionsScreen />} />
      <Route path="accounts" element={<AccountsScreen />} />
      <Route path="investments" element={<InvestmentsScreen />} />
      <Route path="creditcards" element={<CreditCardsScreen />} />
      <Route path="loans" element={<LoansScreen />} />
      <Route path="services" element={<ServicesScreen />} />
      <Route path="settings" element={<SettingsScreen />}>
        <Route path="" element={<EditProfileScreen />} />
        <Route path="preferences" element={<PreferencesScreen />} />
        <Route path="security" element={<SecurityScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
