// Individual project page
import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";

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
    return (
      <Container fluid>
        <div id="name">
          <h1>{project.name}</h1>
        </div>
        <div id="image"></div>
        <div id="description"></div>
        <div id="extLinks"></div>
      </Container>
    );
  }
}

export default ProjectPage;
