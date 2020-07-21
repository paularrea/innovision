import React from "react";
import { Link } from "react-router-dom";

function menu(props) {
  const onClickAbout = () => {
    props.closeModal();
    props.executeScrollToAbout();
  };

  const onClickTeam = () => {
    props.closeModal();
    props.executeScrollToTeam();
  };

  const onClickProducts = () => {
    props.closeModal();
    props.executeScrollToProducts();
  };

  const onClickProjects = () => {
    props.closeModal();
    props.executeScrollToProjects();
  };

  const onClickContact = () => {
    props.closeModal();
    props.executeScrollToContact();
  };

  return (
    <div className="menu-mobile">
      <div className="menu-links-mobile">
        <Link onClick={onClickAbout} to="/">
          Quién somos
        </Link>
        <Link onClick={onClickTeam} to="/">
          Equipo
        </Link>
        <Link onClick={onClickProducts} to="/">
          Productos
        </Link>
        <Link onClick={onClickProjects} to="/">
          Proyectos
        </Link>
        <Link onClick={onClickContact} to="/">
          Contacto
        </Link>
      </div>
    </div>
  );
}

export default menu;
