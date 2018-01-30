import React, { Component } from "react";
import Project from "./Project.js";
import { Link } from "react-router-dom";

import projectData from "../projectData.js";

// Photo gallery with links to full project pages
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projectData
    };
    this.populateProjects = this.populateProjects.bind(this);
  }

  populateProjects() {
    // creates an array of Project components for each datapoint
    let results = this.state.projects.map(project => {
      return (
        <Link
          className="projects-link"
          key={project.id}
          to={`/projects/${project.id}`}
        >
          <Project data={project} />
        </Link>
      );
    });
    return results;
  }

  render() {
    let projectsArray = this.populateProjects();

    return <div className="projects">{projectsArray}</div>;
  }
}

export default Projects;
