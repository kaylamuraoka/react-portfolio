import React from "react";
import universities from "../../data/resume/universities";
import "./style.css";

function EducationSection() {
  return (
    <ul>
      {universities.map((university) => (
        <li key={university.school}>
          <ul>
            {university.degrees.map((degree) => (
              <h4 className="degree" key={degree}>
                {degree}
              </h4>
            ))}
          </ul>
          <p className="school">
            <a href={university.link} target="blank">
              {university.school}, {university.location}
            </a>
            ,{university.dateRange}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default EducationSection;
