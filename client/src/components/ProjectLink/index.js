import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProjectLink({ project }) {
  const images = require.context("../../../../client/public/images", true);
  let image = project.image;
  return (
    <div className="linkObj">
      <Link to="/projects">
        <img src={images(image)} alt="https://via.placeholder.com/150" />
        <div className="label">{project.name}</div>
      </Link>
    </div>
  );
}

export default ProjectLink;
