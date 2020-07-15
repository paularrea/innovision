import React from "react";
import { Link } from "react-router-dom";

function menu(props) {
  return (
    <div className="menu-mobile">
      <div className="menu-links-mobile">
          <Link
            onClick={props.closeModal}
            to="/"
          >
            Quién somos
          </Link>
          <Link
            onClick={props.closeModal}
            to="/team"
          >
            Equipo
          </Link>
          <Link
            onClick={props.closeModal}
            to="/products"
          >
            Productos
          </Link>
          <Link
            onClick={props.closeModal}
            to="/projects"
          >
            Proyectos
          </Link>
          <Link
            onClick={props.closeModal}
            to="/contact"
          >
            Contacto
          </Link>
        </div>
      </div>
  );
}

export default menu;
