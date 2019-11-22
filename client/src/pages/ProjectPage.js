// Individual project page
import React, { Component } from "react";
import { Container } from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
import API from "../utils/API";

class ProjectPage extends Component {
  state = {
    project: {}
  };

  componentDidMount() {
    let URL = window.location.href;
    let id = URL.slice(URL.length - 24);
    this.loadProject(id);
  }

  loadProject = id => {
    API.getProject(id).then(res => {
      this.setState({ project: res.data });
    });
  };

  render() {
    const { project } = this.state;
    return (
      <Container fluid>
        <a href="/">&lt;&lt;&lt; Return to Projects page</a>
        <ProjectCard project={project} />
      </Container>
    );
  }
}

export default ProjectPage;
