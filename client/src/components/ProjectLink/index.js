import React from "react";
import { Link } from "react-router-dom";

function ProjectLink({ project }) {
  return (
    <div>
      <img src={project.image} alt="https://via.placeholder.com/150" />
      <Link to="/projects">{project.name}</Link>
    </div>
  );
}

export default ProjectLink;
