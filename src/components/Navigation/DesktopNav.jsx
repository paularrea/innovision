import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./nav.css";

const DesktopNav = (props) => {
  const [activeEn, setActiveEn] = useState(true);
  const [activeEs, setActiveEs] = useState(false);
  // const [navbar, setNavbar] = useState(false);

  const onClickEnglish = () => {
    props.handleClick("en");
    setActiveEn(true);
    setActiveEs(false);
  };

  const onClickSpanish = () => {
    props.handleClick("es");
    setActiveEn(false);
    setActiveEs(true);
  };

  // useEffect(() => {
  //   const changeNavColor = () => {
  //     if (window.scrollY < (100 * window.innerHeight) / 100) {
  //       setNavbar(false);
  //     } else {
  //       setNavbar(true);
  //     }
  //   };

  //   window.addEventListener("scroll", changeNavColor);
  // }, []);

  return (
    <div 
    // className={navbar ? "navigation" : "transparent-nav"}
    className='navigation'>
      <div>
        <a href onClick={props.executeScrollToHome}>
          <img className="logo" src={logo} alt="innovision logo" />
        </a>
      </div>
      <div 
      // className={navbar ? "menu-links d-flex align-items-center" : "menu-links-transparent d-flex align-items-center"}
      className="menu-links d-flex align-items-center"
      >
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
          className={props.contactInViewport ? "active-link" : ""}
          onClick={props.executeScrollToContact}
          to="/"
        >
          {props.t("nav.contact")}
        </NavLink>
        <div 
        // className={navbar ? "lang" : "transparent-lang"}
        className='lang'>
          <button
            onClick={onClickEnglish}
            className={activeEn ? "active-link-lang" : "disactive-link-lang"}
          >
            EN
          </button>
          /
          <button
            onClick={onClickSpanish}
            className={activeEs ? "active-link-lang" : "disactive-link-lang"}
          >
            ES
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
