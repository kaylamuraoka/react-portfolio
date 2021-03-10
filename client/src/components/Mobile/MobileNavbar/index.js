import React, { useState } from "react";
import "./style.css";
import NavbarLinks from "../../NavbarLinks";
import SocialIcons from "../../SocialIcons";

function MobileNavbar() {
  const [navClickedState, setNavClickedState] = useState(false);

  return (
    <nav role="top-nav">
      <div className="menuToggle" id="menuToggle">
        <input
          name={navClickedState}
          type="checkbox"
          onChange={(event) => {
            setNavClickedState(event.target.checked);
            console.log(event.target.checked, event.target.name);
          }}
        />
        <span></span>
        <span></span>
        <span></span>
        <ul className="menu">
          <NavbarLinks />
        </ul>
      </div>
      <ul className="social-links-div">
        <SocialIcons />
      </ul>
    </nav>
  );
}

export default MobileNavbar;
