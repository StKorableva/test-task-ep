import React from "react";
import "./Header.scss";
import NavLinkComponent from "../NavLink/NavLink";

//TODO: refactor (to one view) & refactor component
const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLinkComponent />
      </nav>
    </header>
  );
};

export default Header;
