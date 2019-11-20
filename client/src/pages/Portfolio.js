import React, { Component } from "react";
import { Container } from "../components/Grid";
import ProjectLink from "../components/ProjectLink";

const linksDivStyling = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

class Portfolio extends Component {
  render() {
    const { projects, loadProject } = this.props;
    return (
      <Container fluid>
        <div className="projectLinks" style={linksDivStyling}>
          {projects.map(project => (
            <ProjectLink key={project._id} project={project} loadProject={loadProject} />
          ))}
        </div>
      </Container>
    );
  }
}

export default Portfolio;
