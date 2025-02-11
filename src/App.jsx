import "./App.css";
import SideMenu from "./components/SideMenu";
import Icon from "./assets/bank-dash-icon.svg";
import IconText from "./assets/bank-dash-text.svg";

import { Outlet } from "react-router-dom";

function App() {
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
        <div
          id="right-side"
          style={
            {
              // opacity: 0.5,
            }
          }
        >
          <div style={{ marginTop: 106 }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
