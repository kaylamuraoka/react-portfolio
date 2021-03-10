import React from "react";
import jobs from "../../data/resume/jobs";

function ExperienceSection() {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.company}>
          <h4>
            <a href={job.link} target="blank">
              {job.company}
            </a>{" "}
            {job.location}- {job.position}
          </h4>
          <p className="dateRange"> {job.dateRange}</p>
          <ul className="points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ExperienceSection;
