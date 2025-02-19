import "./SettingsTabs.css";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SettingsTabs() {
  const location = useLocation();
  return (
    <div className="settings-tabs">
      <NavLink
        to={""}
        className={
          "link " + (location.pathname === "/settings" ? "active" : "")
        }
      >
        <button
          className="button"
          style={{
            color: location.pathname === "/settings" ? "#1814F3" : "#718EBF",
          }}
        >
          Edit Profile
        </button>
      </NavLink>
      <NavLink to={"preferences"} className="link">
        <button
          className={
            "button " +
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
          "link " + (location.pathname === "/settings/security" ? "active" : "")
        }
      >
        <button
          className="button"
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
      <div className="indicator"></div>
    </div>
  );
}
