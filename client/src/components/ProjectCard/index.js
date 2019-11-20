import React, { Component } from "react";
import "./style.css";

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
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
        <div id="description">
          <p>{project.description}</p>
        </div>
        <div id="extLinks">
          <div>
            <a href={project.deployedLink} target="_blank">
              <h3>Try out the app</h3>
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
