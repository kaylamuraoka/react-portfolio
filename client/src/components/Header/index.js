import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <div class="title">
        <h2 data-testid="heading">
          <a href={props.route}>{props.title}</a>
        </h2>
        {props.subtitle ? <p>{props.subtitle}</p> : null}
      </div>
    </header>
  );
}

export default Header;
