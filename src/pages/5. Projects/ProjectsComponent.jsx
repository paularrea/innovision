import React from "react";
import ProjectList from "./components/ProjectsList";
import "./projects.css";
import { Helmet } from "react-helmet";

function ProjectsComponent(props) {
  return (
    <div ref={props.ProjectsRef} className="page projects-wrapper">
      <Helmet>
        <title>Innovision Medical</title>
        <meta
          name="description"
          content="This is the Innovision Medical projects page"
        />
      </Helmet>
      <ProjectList />
    </div>
  );
}

export default ProjectsComponent;
