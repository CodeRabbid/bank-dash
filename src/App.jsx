import "./App.css";
import "./Common.css";
import SideMenu from "./components/SideMenu";
import Icon from "./assets/bank-dash-icon.svg";
import IconText from "./assets/bank-dash-text.svg";
import Header from "./components/Header";

import { Outlet } from "react-router-dom";

import { useState } from "react";

function App() {
  const [displaySideMenu, setDisplaySideMenu] = useState(false);

  return (
    <div className="app">
      <div id="left-side">
        <div id="logo-container">
          <img src={Icon} alt="icon" id="icon" />
          <img src={IconText} alt="bank-dash" id="icon-text" />
        </div>
        <SideMenu toggleDisplaySidMenu={() => setDisplaySideMenu(false)} />
      </div>
      <div id="right-side">
        <Header
          displaySideMenu={displaySideMenu}
          setDisplaySideMenu={setDisplaySideMenu}
        />

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
  );
}

export default App;
