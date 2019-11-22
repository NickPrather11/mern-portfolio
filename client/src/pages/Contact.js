import React, { Component } from "react";
import { Container } from "../components/Grid";

const contactStyle = {
    textAlign: "center",
    margin: "5rem"
  },
  imgStyle = {
    width: "7rem"
  };

class Contact extends Component {
  render() {
    const logos = require.context("../../../client/public/images", true);
    const githubImg = "./GitHub_Logo.png";
    const linkedInImg = "./LI-Logo.png";
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
            <a href="https://www.linkedin.com/in/nick-prather-945109101/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInImg ? logos(linkedInImg) : ""} alt="https://via.placeholder.com/150" style={imgStyle} />
            </a>
          </div>
          <br />
          <div id="githublink">
            <a href="https://github.com/NickPrather11" target="_blank" rel="noopener noreferrer">
              <img src={githubImg ? logos(githubImg) : ""} alt="https://via.placeholder.com/150" style={imgStyle} />
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
