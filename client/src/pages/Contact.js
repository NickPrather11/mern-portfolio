import React, { Component } from "react";
import { Container } from "../components/Grid";

const contactStyle = {
  textAlign: "center"
};

class Contact extends Component {
  render() {
    return (
      <Container fluid>
        <div style={contactStyle}>
          <div id="email">Email: nickprather11@gmail.com</div>
          <br />
          <div id="phone">Phone: 919-434-3043</div>
          <br />
          <div id="linkedin">
            <a href="https://www.linkedin.com/in/nick-prather-945109101/" target="_blank">
              LinkedIn Profile
            </a>
          </div>
          <br />
          <div id="githublink">
            <a href="https://github.com/NickPrather11" target="_blank">
              GitHub Profile
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
