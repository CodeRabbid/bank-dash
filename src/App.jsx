import "./App.css";
import SideMenu from "./components/SideMenu";
import Icon from "./assets/bank-dash-icon.svg";
import IconText from "./assets/bank-dash-text.svg";
import NotificationsIcon from "./assets/notifications-icon.svg";
import SettingsIcon from "./assets/settings-icon.svg";
import OptionsButton from "./assets/options-button.svg?react";
import MagnifyingGlass from "./assets/magnifying-glass.svg";
import ProfilePicture from "./assets/profile-picture.svg";

import { Outlet, useLocation } from "react-router-dom";

import { useState } from "react";

function App() {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);
  const location = useLocation();
  const pageTitle = () => {
    if (location.pathname === "/") return "Overview";
    else if (location.pathname.startsWith("/transactions"))
      return "Transactions";
    else if (location.pathname.startsWith("/accounts")) return "Accounts";
    else if (location.pathname.startsWith("/investments")) return "Investments";
    else if (location.pathname.startsWith("/creditcards"))
      return "Credit Cards";
    else if (location.pathname.startsWith("/loans")) return "Loans";
    else if (location.pathname.startsWith("/services")) return "Services";
    else if (location.pathname.startsWith("/settings")) return "Settings";
  };

  return (
    <>
      <div>
        <div id="left-side">
          <div id="logo-container">
            <img src={Icon} alt="icon" id="icon" />
            <img src={IconText} alt="bank-dash" id="icon-text" />
          </div>
          <SideMenu toggleDisplaySidMenu={() => setDisplaySideMenu(false)} />
        </div>
        <div id="right-side">
          <div id="header-container">
            <div
              className="center-content"
              style={{
                width: "100%",
                paddingLeft: 24,
                paddingRight: 30,
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={() => {
                  setDisplaySideMenu(!displaySideMenu);
                }}
                className="options-button"
              >
                <OptionsButton />
              </button>
              <h1 className="overview">{pageTitle()}</h1>
              <div className=" top-right-options ">
                <div className="center-content">
                  <form>
                    <div className="search-field">
                      <button className="round-button" aria-label="search">
                        <img src={MagnifyingGlass} alt="magnifying-glass" />
                      </button>
                      <input className="search-bar" placeholder="Search ..." />
                    </div>
                  </form>
                  <div className="round-button" style={{ flexShrink: 1 }}>
                    <img src={SettingsIcon} alt="settings-icon" />
                  </div>
                  <div className="round-button">
                    <img src={NotificationsIcon} alt="notifications-icon" />
                  </div>
                  <img
                    src={ProfilePicture}
                    alt="profile-picture"
                    style={{ width: 45 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {displaySideMenu ? (
              <div className="side-menu-container">
                <SideMenu
                  toggleDisplaySidMenu={() => setDisplaySideMenu(false)}
                />
              </div>
            ) : (
              <></>
            )}
            <div className="main-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
