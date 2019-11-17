import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import ProjectLink from "../components/ProjectLink";

const linksDivStyling = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

class Portfolio extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.projects);
    return (
      <Container fluid>
        <div>
          <h1>Portfolio Page</h1>
        </div>
        <div className="projectLinks" style={linksDivStyling}>
          {this.state.projects.map(project => (
            <ProjectLink key={project._id} project={project} />
          ))}
        </div>
      </Container>
    );
  }
}

export default Portfolio;
