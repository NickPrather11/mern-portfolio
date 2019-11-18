import React, { Component } from "react";
import "./style.css";

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: this.props.project
    };
  }

  render() {
    const { project } = this.state;
    const images = require.context("../../../../client/public/images", true);
    let image = "./" + project.image;
    return (
      <div>
        <div id="name">
          <h1>{project.name}</h1>
        </div>
        <div className="imgStyle">
          <img src={project.image ? images(image) : ""} alt="https://via.placeholder.com/150" />
        </div>
        <div id="description"></div>
        <div id="extLinks">
          <div>
            <a href={project.deployedLink} target="_blank">
              <h3>Try it out</h3>
            </a>
          </div>
          <div>
            <a href={project.githubLink} target="_blank">
              <h3>Check out the code</h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
