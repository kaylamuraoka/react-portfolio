import React from "react";

function Project(props) {
  return (
    <div className="card" key={props.tile}>
      <div className="card-header text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="font-italic mb-1">
          {props.subtitle}, {props.date}
        </p>
      </div>
      <img
        src={props.image}
        className="card-img-top mt-3"
        alt={props.title}
        height="200px"
        width="300px"
      />
      <div className="card-body">
        <p className="card-text">{props.description}</p>
        <p>Tools:</p>
        <ul>
          <li>
            <p>{props.tools}</p>
          </li>
        </ul>
        <a href={props.githubRepo} className="btn btn-blue" target="blank">
          Github Repo
        </a>
        {props.deployedLink ? (
          <a href={props.deployedLink} className="btn btn-blue" target="blank">
            Live Demo
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
