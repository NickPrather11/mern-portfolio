import React from "react";
import MediaQuery from "react-responsive";
import "./style.css";

function Nav() {
  return (
    <div>
      <MediaQuery minDeviceWidth={405}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
          <a className="navbar-brand" id="about" href="/about">
            About Me
          </a>
          <h1 className="text-light">|</h1>
          <a className="navbar-brand" id="portfolio" href="/">
            Projects
          </a>
          <h1 className="text-light">|</h1>
          <a className="navbar-brand" id="contact" href="/contact">
            Contact
          </a>
        </nav>
      </MediaQuery>
      <MediaQuery maxWidth={404}>
        <nav className="navbar navbar-expand-sm navbar-static-top navbar-dark bg-secondary">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapseMenu"
            aria-controls="collapseMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapseMenu">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="navbar-brand" href="/about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="navbar-brand" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </MediaQuery>
    </div>
  );
}

export default Nav;
