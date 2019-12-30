import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/saint-petersburg" isActive = {(match, location) => match || location.pathname === '/'} label={"Saint-Petersburg"} activeStyle={{color: 'red'}}>
              Saint-Petersburg
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/moscow" label={"Moscow"} activeStyle={{color: 'red'}}>
              Moscow
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/rostov-on-don" label={"Rostov-on-Don"} activeStyle={{color: 'red'}}>
              Rostov-on-Don
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
