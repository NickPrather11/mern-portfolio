import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

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
      </Container>
    );
  }
}

export default Portfolio;
