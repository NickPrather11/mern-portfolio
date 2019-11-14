import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <a className="navbar-brand" href="/about">
        About Me
      </a>
      <h1 className="text-light">|</h1>
      <a className="navbar-brand" href="/">
        Portfolio
      </a>
      <h1 className="text-light">|</h1>
      <a className="navbar-brand" href="/contact">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
