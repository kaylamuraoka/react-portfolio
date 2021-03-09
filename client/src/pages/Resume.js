import React, { Component } from "react";
import Container from "../components/Container";
import ResumeHeader from "../components/ResumeHeader";
import EducationSection from "../components/EducationSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
const filePath = process.env.PUBLIC_URL + "/assets/files/";

class Resume extends Component {
  render() {
    return (
      <Container>
        <ResumeHeader />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <iframe
          className="resume-iframe"
          src={`${filePath}KaylaMuraokaResume.pdf`}
          width="100%"
        ></iframe>
      </Container>
    );
  }
}

export default Resume;
