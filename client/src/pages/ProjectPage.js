// Individual project page
import React, { Component } from "react";
import { Container } from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

class ProjectPage extends Component {
  state = {
    project: {}
  };

  componentDidMount() {
    this.loadProject();
  }

  loadProject = () => {
    let id = window.location.href.slice(31);
    axios.get("/api/projects/" + id).then(res => {
      this.setState({ project: res.data });
    });
  };

  render() {
    const { project } = this.state;
    console.log("Project: ", project);
    return (
      <Container fluid>
        <ProjectCard project={project} />
      </Container>
    );
  }
}

export default ProjectPage;
