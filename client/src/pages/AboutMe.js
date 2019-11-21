import React, { Component } from "react";
import { Container } from "../components/Grid";

const bioPicStyle = {
  float: "left",
  height: "10rem",
  width: "10rem",
  margin: "1rem"
};

class AboutMe extends Component {
  render() {
    const images = require.context("../../public/images", true);
    const bioImg = images("./bio_image.jpg");
    return (
      <Container fluid>
        <img id="bioPic" src={bioImg} style={bioPicStyle} alt="https://via.placeholder.com/150" />

        <p>
          As a Web Developer with a diverse background, I look forward to applying my varied experiences as a valuable
          member of a web or software development team. ​I am a graduate of the UNC Coding Bootcamp and I have a wealth
          of music experience, focused on creation and recording, as well as a deep understanding of the technology and
          instrumentation used.
        </p>
        <p>
          I pride myself at being able to create an organized approach to problem-solving using multiple perspectives.
          Whether I’m simply sketching out an algorithm or building on my current understanding of HTML5, CSS ( and
          various frameworks), Javascript, JQuery, Node.js, MongoDB, SQL, Express.js and React.js, I enjoy using the
          skills at my disposal to create a fluid and attractive finished product.
        </p>
        <p>
          I am a quick learner and good at making complicated data and problems more digestible. I am also very
          passionate about the learning process and developing paths toward understanding. I have found that my skills
          at writing music and working with synthesizers and recording hardware make me effective at developing fluid
          and intuitive User Interfaces and processing the data created. ​I remain excited about expanding my knowledge,
          and I look forward to deploying my skills and enthusiasm for continuous learning as assets to my future
          employer.
        </p>
      </Container>
    );
  }
}

export default AboutMe;
