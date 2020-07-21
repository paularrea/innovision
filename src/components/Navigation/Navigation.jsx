import React from "react";
import { NavLink } from "react-router-dom";
import BurguerMenu from "./burguerMenu";
import logo from "../../img/innovision.png";
import HideOnScroll from '../HideOnScroll';

function Navigation(props) {

  return (
    <div>
      {window.innerWidth >= 1110 ? (
        <div className="navigation">
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
              to="/"
              // className={props.entered && "active-link"}
            >
              Equipo
            </NavLink>
            <NavLink
              onClick={props.executeScrollToProducts}
              to="/"
              // className={props.entered && "active-link"}
            >
              Productos
            </NavLink>
            <NavLink
              onClick={props.executeScrollToProjects}
              to="/"
              // className={props.entered && "active-link"}
            >
              Proyectos
            </NavLink>
            <NavLink
              onClick={props.executeScrollToContact}
              to="/"
              // className={props.entered && "active-link"}
            >
              Contacto
            </NavLink>
          </div>
        </div>
      ) : (
        <HideOnScroll>
          <div id='nav-id' className="navigation-mobile">
            <div>
              <a href onClick={props.executeScrollToHome}>
                <img className="logo" src={logo} alt="innovision logo" />
              </a>
            </div>
            <BurguerMenu 
              executeScrollToAbout={props.executeScrollToAbout}
              executeScrollToHome={props.executeScrollToHome}
              executeScrollToProducts={props.executeScrollToProducts}
              executeScrollToProjects={props.executeScrollToProjects}
              executeScrollToTeam={props.executeScrollToTeam}
              executeScrollToContact={props.executeScrollToContact}
            />
          </div>
          </HideOnScroll>
      )}
    </div>
  );
}

export default Navigation;
