import React from "react";
import { NavLink } from "react-router-dom";
import navRoutes from "../../data/navigationRoutes";
import "./style.css";

function NavbarLinks() {
  return (
    <>
      {navRoutes.map((route) => (
        <li
          className="nav-link"
          key={route.label}
          onClick={() => window.scrollTo(0, 0)}
        >
          <NavLink
            to={`/react-portfolio${route.path}`}
            activeClassName="active"
            exact={true}
          >
            {route.label}
          </NavLink>
        </li>
      ))}
    </>
  );
}

export default NavbarLinks;
