import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "./utils/API";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import ProjectPage from "./pages/ProjectPage";
import Nav from "./components/Nav";
import MediaQuery from "react-responsive";

const headerStyle = {
  textAlign: "center",
  fontFamily: "Monofett, cursive",
  lineHeight: "1.5",
  fontSize: "350%"
};

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
          <MediaQuery minDeviceWidth={480}>
            <div>
              <h1 style={headerStyle}>N I C K &nbsp;&nbsp; P R A T H E R</h1>
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={479}>
            <div style={headerStyle}>
              <h1>N I C K</h1>
              <h1>P R A T H E R</h1>
            </div>
          </MediaQuery>

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
