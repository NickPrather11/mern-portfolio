import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={AboutMe} />
      </div>
    </Router>
  );
}

export default App;
