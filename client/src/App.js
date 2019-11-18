import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import API from "./utils/API";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import ProjectPage from "./pages/ProjectPage";
import Nav from "./components/Nav";

class App extends Component {
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
    const { projects } = this.state;
    return (
      <Router>
        <div>
          <Nav />
          <Route exact path="/">
            <Portfolio projects={projects} />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <ProjectPage />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
