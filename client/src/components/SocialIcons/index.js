import React from "react";
import socialLinks from "./../../data/contactLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function SocialIcons() {
  return (
    <>
      {socialLinks.map((icon) => (
        <li className="icon-holder" key={icon.label}>
          <a href={icon.link} target="blank">
            <FontAwesomeIcon icon={icon.icon} />
          </a>
        </li>
      ))}
    </>
  );
}

export default SocialIcons;
