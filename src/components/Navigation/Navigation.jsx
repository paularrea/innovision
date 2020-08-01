import React from "react";
import { NavLink } from "react-router-dom";
import BurguerMenu from "./burguerMenu";
import logo from "../../img/innovision.png";
import HideOnScroll from "../HideOnScroll";


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
              className={props.aboutInViewport ? "active-link" : ""}
              onClick={props.executeScrollToAbout}
              to="/"
            >
              {props.t("nav.about")} 
            </NavLink>
            <NavLink
              className={props.teamInViewport ? "active-link" : ""}
              onClick={props.executeScrollToTeam}
              to="/"
            >
              {props.t("nav.team")}
            </NavLink>
            <NavLink
              className={props.productsInViewport ? "active-link" : ""}
              onClick={props.executeScrollToProducts}
              to="/"
            >
              {props.t("nav.products")}
            </NavLink>
            <NavLink
              className={props.projectsInViewport ? "active-link" : ""}
              onClick={props.executeScrollToProjects}
              to="/"
            >
              {props.t("nav.projects")}
            </NavLink>
            <NavLink
              className={props.contactInViewport ? "active-link" : ""}
              onClick={props.executeScrollToContact}
              to="/"
            >
              {props.t("nav.contact")}
            </NavLink>
            <div className='lang'>
              <button onClick={()=>props.handleClick('en')}>EN</button>/
              <button onClick={()=>props.handleClick('es')}>ES</button>
            </div>
          </div>
        </div>
      ) : (
        <HideOnScroll>
          <div id="nav-id" className="navigation-mobile">
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
