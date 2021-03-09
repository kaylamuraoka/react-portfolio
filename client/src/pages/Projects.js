import React, { Component } from "react";
import Container from "./../components/Container";
import Project from "./../components/Project";
import data from "./../data/projects";
import Header from "./../components/Header";

class Projects extends Component {
  render() {
    return (
      <Container>
        <Header title={"Projects"} route={"/react-portfolio/projects"} />

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
          {data.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              githubRepo={project.githubRepo}
              deployedLink={project.deployedLink}
              image={project.image}
              date={project.date}
              description={project.desc}
              tools={project.tools}
            />
          ))}
        </div>
      </Container>
    );
  }
}

export default Projects;
