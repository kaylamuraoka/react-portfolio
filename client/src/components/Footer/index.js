import React from "react";
import "./style.css";
import SocialIcons from "../SocialIcons";
import NavbarLinks from "../NavbarLinks";
import Row from "../Row";
import Col from "../Col";

function Footer() {
  return (
    <footer>
      <Row>
        <Col size={"12"}>
          <ul className="footer-nav">
            <NavbarLinks />
          </ul>
        </Col>
      </Row>

      <Row>
        <Col size={"12"}>
          <ul className="footer-icons">
            <SocialIcons />
          </ul>
        </Col>
      </Row>

      <Row>
        <Col size={"12"}>
          <button className="footer-btn" onClick={() => window.scrollTo(0, 0)}>
            Back to top
          </button>
        </Col>
      </Row>

      <Row>
        <Col size={"12"}>
          <h5 className="copyright-text">© Copyright 2020 Kayla Muraoka</h5>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
