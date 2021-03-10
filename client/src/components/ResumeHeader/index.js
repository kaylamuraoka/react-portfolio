import React from "react";
import "./style.css";

function ResumeHeader() {
  return (
    <div className="title">
      <h2 data-testid="heading">
        <a href="/resume">Resume</a>
      </h2>
      <div class="link-container">
        <h4>
          <a href="#education">Education</a>
        </h4>
        <h4>
          <a href="#experience">Experience</a>
        </h4>
        <h4>
          <a href="#skills">Skills</a>
        </h4>
      </div>
    </div>
  );
}

export default ResumeHeader;
