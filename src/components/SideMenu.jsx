import HomeIcon from "../assets/home-icon.svg?react";
import TransferIcon from "../assets/transfer-icon.svg?react";
import UserIcon from "../assets/user-icon.svg?react";
import InvestmentIcon from "../assets/investment-icon.svg?react";
import CreditCardIcon from "../assets/credit-card-icon.svg?react";
import LoansIcon from "../assets/loan-icon.svg?react";
import ServiceIcon from "../assets/service-icon.svg?react";
import EconomicsIcon from "../assets/econometrics-icon.svg?react";
import SettingsSolidIcon from "../assets/settings-solid-icon.svg?react";

import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function SideMenu({ toggleDisplaySidMenu }) {
  return (
    <nav className="side-menu">
      <ul style={{ marginTop: 8 }}>
        <SideMenuButton
          path="/"
          Icon={HomeIcon}
          text="Dashboard"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
        <SideMenuButton
          path="/transactions"
          Icon={TransferIcon}
          text="Transactions"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
        <SideMenuButton
          path="/accounts"
          Icon={UserIcon}
          text="Accounts"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
        <SideMenuButton
          path="/investments"
          Icon={InvestmentIcon}
          text="Investments"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
        <SideMenuButton
          path="/creditcards"
          Icon={CreditCardIcon}
          text="Credit Cards"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
        <SideMenuButton
          path="/loans"
          Icon={LoansIcon}
          text="Loans"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
        <SideMenuButton
          path="/services"
          Icon={ServiceIcon}
          text="Services"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
        <SideMenuButton
          path="/privileges"
          Icon={EconomicsIcon}
          text="My Privileges"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
        <SideMenuButton
          path="/settings"
          Icon={SettingsSolidIcon}
          text="Settings"
          toggleDisplaySidMenu={toggleDisplaySidMenu}
        />
      </ul>
    </nav>
  );
}

const SideMenuButton = ({ path, Icon, text, toggleDisplaySidMenu }) => {
  const classNameFunc = () =>
    location.pathname === path ? "sidebar-button active" : "sidebar-button";

  const location = useLocation();
  return (
    <>
      <NavLink
        to={path}
        className={classNameFunc}
        onClick={() => toggleDisplaySidMenu()}
      >
        <li className="side-menu-item" key={text}>
          <div
            style={{
              display: "inline-flex",
            }}
          >
            <Icon
              fill={location.pathname === path ? "#2d60ff" : "#B1B1B1"}
              style={{
                marginLeft: 30,
                width: 20,
                height: 20,
              }}
            />
            <span style={{ marginLeft: 20 }}>{text}</span>
          </div>
        </li>
      </NavLink>
    </>
  );
};
