import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import BurguerMenu from "./burguerMenu";
import logo from "../../img/innovision.png";
import HideOnScroll from "../HideOnScroll";


function Navigation(props) {
const [activeEn, setActiveEn] = useState(false);
const [activeEs, setActiveEs] = useState(true);

const onClickEnglish = () => {
  props.handleClick('en');
  setActiveEn(true);
  setActiveEs(false);
}

const onClickSpanish = () => {
  props.handleClick('es');
  setActiveEn(false);
  setActiveEs(true);
}

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
              <button onClick={onClickEnglish} className={activeEn ? "active-link-lang" : "disactive-link-lang"}>EN</button>/
              <button onClick={onClickSpanish} className={activeEs ? "active-link-lang" : "disactive-link-lang"}>ES</button>
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
              t={props.t}
              handleClick={props.handleClick}
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
