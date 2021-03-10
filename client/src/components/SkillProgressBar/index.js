import React from "react";

const SkillProgressBar = (props) => {
  return (
    <div className="progress">
      <div
        className={`progress-bar progress-bar-striped progress-bar-animated ${props.color}`}
        role="progressbar"
        aria-valuenow={props.width}
        aria-valuemin="0"
        aria-valuemax="100"
        width={`${props.width}%`}
      >
        {props.skill}
      </div>
    </div>
  );
};

export default SkillProgressBar;
