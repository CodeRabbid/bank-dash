import SettingsTabs from "./SettingsTabs";
import "./SettingsScreen.css";
import { useState } from "react";

import { Outlet } from "react-router-dom";

export default function SettingsScreen() {
  return (
    <div className="settings-screen">
      <div className="frame">
        <SettingsTabs />
        <Outlet />
      </div>
    </div>
  );
}
