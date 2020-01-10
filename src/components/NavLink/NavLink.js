import React from "react";
import { NavLink } from "react-router-dom";

const cities = ["saint-petersburg", "moscow", "rostov-on-don"];

const NavLinkComponent = () => {
  const renderNavLink = cities => {
    return cities.map((city, index) => (
      <li className="header__nav-item">
        <NavLink to={`/${city}`} key={index} activeStyle={{ color: "red" }}>
          {city}
        </NavLink>
      </li>
    ));
  };

  return <ul className="header__nav-list">{renderNavLink(cities)}</ul>;
};

export default NavLinkComponent;
