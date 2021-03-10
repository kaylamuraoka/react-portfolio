import React from "react";
import skills from "../../data/resume/skills";
import SkillProgressBar from "../SkillProgressBar";

function SkillsSection() {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill.title}>
          <h4>{skill.title}</h4>
          {(() => {
            switch (skill.competency) {
              case 1:
                return <SkillProgressBar width={"20"} skill={skill.title} />;
              case 2:
                return (
                  <SkillProgressBar
                    width={"40"}
                    skill={skill.title}
                    color={"bg-success"}
                  />
                );
              case 3:
                return (
                  <SkillProgressBar
                    width={"60"}
                    skill={skill.title}
                    color={"bg-info"}
                  />
                );
              case 4:
                return (
                  <SkillProgressBar
                    width={"80"}
                    skill={skill.title}
                    color={"bg-warning"}
                  />
                );
              case 5:
                return (
                  <SkillProgressBar
                    width={"100"}
                    skill={skill.title}
                    color={"bg-danger"}
                  />
                );
              default:
                return <SkillProgressBar width={"40"} skill={skill.title} />;
            }
          })()}
        </li>
      ))}
    </ul>
  );
}

export default SkillsSection;
