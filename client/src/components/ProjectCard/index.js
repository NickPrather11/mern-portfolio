import React, { Component } from "react";
import "./style.css";

class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    const images = require.context("../../../../client/public/images", true);
    let image = "./" + project.image;
    const ghMark = "./GitHub-Mark-120px-plus.png";
    return (
      <div className="cardContainer">
        <div>
          <div id="name">
            <h1>{project.name}</h1>
          </div>
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="imgStyle">
            <img src={project.image ? images(image) : ""} alt="https://via.placeholder.com/150" className="imgStyle" />
          </a>
        </div>

        <div id="description">
          <p>{project.description}</p>
        </div>
        <br />
        <div>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" id="ghLink">
            <img src={images(ghMark)} alt="https://via.placeholder.com/150" id="ghLogo" />
            <h3>Check out the code</h3>
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
