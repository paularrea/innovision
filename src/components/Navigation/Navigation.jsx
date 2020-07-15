import React from "react";
import { NavLink } from "react-router-dom";
import BurguerMenu from "./burguerMenu";
import logo from "../../img/innovision.png";

function Navigation(props) {
  return (
    <div>
      {window.innerWidth >= 1110 ? (
        <div className="navigation text-dark d-flex justify-content-between align-items-center">
          <div>
            <a href onClick={props.executeScrollToHome}>
              <img className="logo" src={logo} alt="innovision logo" />
            </a>
          </div>
          <div className="menu-links d-flex align-items-center">
            <NavLink
              onClick={props.executeScrollToAbout}
              to="/"
              // className={props.entered && "active-link"}
            >
              Quién somos
            </NavLink>
            <NavLink
              onClick={props.executeScrollToTeam}
              to="/team"
              // className={props.entered && "active-link"}
            >
              Equipo
            </NavLink>
            <NavLink
              onClick={props.executeScrollToProducts}
              to="/products"
              // className={props.entered && "active-link"}
            >
              Productos
            </NavLink>
            <NavLink
              onClick={props.executeScrollToProjects}
              to="/projects"
              // className={props.entered && "active-link"}
            >
              Proyectos
            </NavLink>
            <NavLink
              onClick={props.executeScrollToContact}
              to="/contact"
              // className={props.entered && "active-link"}
            >
              Contacto
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="navigation-mobile d-flex justify-content-between align-items-center">
          <div>
            <a href onClick={props.executeScrollToHome}>
              <img className="logo" src={logo} alt="innovision logo" />
            </a>
          </div>
          <BurguerMenu />
        </div>
      )}
    </div>
  );
}

export default Navigation;
