import React from "react";
import "./style.css";
import NavbarLinks from "../NavbarLinks";
import MobileNavbar from "../Mobile/MobileNavbar";
import { useViewportContext } from "./../../utils/viewportContext";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons";

function Navbar() {
  const { width } = useViewportContext();
  const breakpoint = 620;

  const DesktopNavbar = () => {
    return (
      <nav className="top-nav">
        <Link to="/react-portfolio/">
          <div className="logo">Kayla Muraoka</div>
        </Link>
        <div className="navigation-links">
          <ul>
            <NavbarLinks />
            <SocialIcons />
          </ul>
        </div>
      </nav>
    );
  };

  return width < breakpoint ? <MobileNavbar /> : <DesktopNavbar />;
}

export default Navbar;
