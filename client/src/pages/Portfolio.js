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
    const { projects } = this.props;
    const images = require.context("../../../client/public/images", true);
    const ghMark = "./GitHub-Mark-120px-plus.png";
    return (
      <Container fluid>
        <div className="projectLinks" style={linksDivStyling}>
          {projects.map(project => (
            <ProjectLink key={project._id} project={project} />
          ))}
        </div>
        <br />
        <div>
          <a
            href="https://github.com/NickPrather11/mern-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            id="ghLink"
          >
            <img src={images(ghMark)} alt="https://via.placeholder.com/150" id="ghLogo" />
            <h3>Check out the code for this portfolio</h3>
          </a>
        </div>
        <br />
        <br />
      </Container>
    );
  }
}

export default Portfolio;
