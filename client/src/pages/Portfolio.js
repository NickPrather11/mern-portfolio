import React, { Component } from "react";
import API from "../utils/API";

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
    return console.log(this.state.projects);
  }
}

export default Portfolio;
