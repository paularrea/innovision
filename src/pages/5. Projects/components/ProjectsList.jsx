import React from "react";
import Fade from "react-reveal/Fade";

const ProjectsList = (props) => {
  const projects = [
    {
      id: 1,
      name: "Project1",
      description:
        "Apiente praesentium ab eveniet, doloremque, deleniti unde in vero voluptatibus. Repellendus blanditiis",
    },
    {
      id: 2,
      name: "Project2",
      description:
        "Apiente praesentium ab eveniet, doloremque, deleniti unde in vero voluptatibus. Repellendus blanditiis",
    },
    {
      id: 3,
      name: "Project3",
      description:
        "Apiente praesentium ab eveniet, doloremque, deleniti unde in vero voluptatibus. Repellendus blanditiis",
    },
    {
      id: 4,
      name: "Project4",
      description:
        "Apiente praesentium ab eveniet, doloremque, deleniti unde in vero voluptatibus. Repellendus blanditiis",
    },
    {
      id: 5,
      name: "Project5",
      description:
        "Apiente praesentium ab eveniet, doloremque, deleniti unde in vero voluptatibus. Repellendus blanditiis",
    },
    {
      id: 6,
      name: "Project6",
      description:
        "Apiente praesentium ab eveniet, doloremque, deleniti unde in vero voluptatibus. Repellendus blanditiis",
    },
    {
      id: 7,
      name: "Project7",
      description:
        "Apiente praesentium ab eveniet, doloremque, deleniti unde in vero voluptatibus. Repellendus blanditiis",
    },
    {
      id: 8,
      name: "Project8",
      description:
        "Apiente praesentium ab eveniet, doloremque, deleniti unde in vero voluptatibus. Repellendus blanditiis",
    },
  ];

  const projectsList = projects.map((project) => (
    <Fade>
      <div className="product-card col-12 col-md-6">
        <div className="project-img">
          <img src={project.img} alt="" />
        </div>
        <div className="project-text">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </Fade>
  ));

  return <div className="row product-list">{projectsList}</div>;
};

export default ProjectsList;
