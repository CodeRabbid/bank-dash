import "./SettingsTabs.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SettingsTabs() {
  const location = useLocation();
  return (
    <div className="recent-transactions-tab-frame">
      <NavLink
        to={""}
        className={
          "recent-transactions-tab-link " +
          (location.pathname === "/settings" ? "active" : "")
        }
      >
        <button
          className="recent-transactions-tab-button"
          style={{
            color: location.pathname === "/settings" ? "#1814F3" : "#718EBF",
          }}
        >
          Edit Profile
        </button>
      </NavLink>
      <NavLink to={"preferences"} className="recent-transactions-tab-link">
        <button
          className={
            "recent-transactions-tab-button " +
            (location.pathname === "/settings/preferences" ? "active" : "")
          }
          style={{
            color:
              location.pathname === "/settings/preferences"
                ? "#1814F3"
                : "#718EBF",
          }}
        >
          Preferences
        </button>
      </NavLink>
      <NavLink
        to={"security"}
        className={
          "recent-transactions-tab-link " +
          (location.pathname === "/settings/security" ? "active" : "")
        }
      >
        <button
          className="recent-transactions-tab-button"
          style={{
            color:
              location.pathname === "/settings/security"
                ? "#1814F3"
                : "#718EBF",
          }}
        >
          Security
        </button>
      </NavLink>
      <div className="recent-transactions-tab-indicator"></div>
    </div>
  );
}
