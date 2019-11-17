// Individual project page
import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";

const imgStyle = {
  width: "30rem"
};

class ProjectPage extends Component {
  state = {
    project: {}
  };

  componentDidMount() {
    this.loadProject();
  }

  loadProject = () => {
    let id = window.location.href.slice(31);
    API.getProject(id)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    const { project } = this.state;
    const images = require.context("../../../client/public/images", true);
    console.log("Project: ", project);
    return (
      <Container fluid>
        <div id="name">
          <h1>{project.name}</h1>
        </div>
        <div id="image" style={imgStyle}>
          {/* <img src={images(project.image)} alt="https://via.placeholder.com/150" /> */}
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
      </Container>
    );
  }
}

export default ProjectPage;
