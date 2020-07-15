import React from "react";
import Fade from "react-reveal/Fade";


const ProjectsList = (props) => {
  const projects = [
    {
      id: 1,
      name: "Master Mask",
      price: "20USD",
      brand: "Maskus",
    },
    {
      id: 2,
      name: "Mask deluxe",
      price: "35USD",
      brand: "My masks",
    },
    {
      id: 3,
      name: "Covid Saver",
      price: "40USD",
      brand: "Maskid",
    },
    {
      id: 4,
      name: "Ferme la bouche",
      price: "15USD",
      brand: "Tancala",
    },
    {
      id: 5,
      name: "Master Mask",
      price: "20USD",
      brand: "Maskus",
    },
    {
      id: 6,
      name: "Mask deluxe",
      price: "35USD",
      brand: "My masks",
    },
    {
      id: 7,
      name: "Covid Saver",
      price: "40USD",
      brand: "Maskid",
    },
    {
      id: 8,
      name: "Ferme la bouche",
      price: "15USD",
      brand: "Tancala",
    },
  ];

  const projectsList = projects.map((project) => (
    <Fade>
    <div className="product-card col-12 col-md-6">
    <div className="project-img">
          <img src={project.img} alt="" />
        </div>
      <div className="price-brand-wrapper d-flex justify-content-between align-items-start">
        <h3>{project.name}</h3>
        <p className='pt-4'>{project.price}</p>
      </div>
      <p className='brand-product'>{project.brand}</p>
    </div>
    </Fade>
  ));

  return <div className="row product-list">{projectsList}</div>;
};

export default ProjectsList;
