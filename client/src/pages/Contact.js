import React, { Component } from "react";
import { Container } from "../components/Grid";

const contactStyle = {
  textAlign: "center",
  margin: "5rem"
};

class Contact extends Component {
  render() {
    return (
      <Container fluid>
        <div style={contactStyle}>
          <div id="email">
            <h2>Email: nickprather11@gmail.com</h2>
          </div>
          <br />
          <div id="phone">
            <h2>Phone: 919-434-3043</h2>
          </div>
          <br />
          <div id="linkedin">
            <a href="https://www.linkedin.com/in/nick-prather-945109101/" target="_blank">
              <h4>LinkedIn Profile</h4>
            </a>
          </div>
          <br />
          <div id="githublink">
            <a href="https://github.com/NickPrather11" target="_blank">
              <h4>GitHub Profile</h4>
            </a>
          </div>
          <br />
          <div id="resumePDF"></div>

          <br />
        </div>
      </Container>
    );
  }
}

export default Contact;
