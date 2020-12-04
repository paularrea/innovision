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

  const onClickContact = () => {
    props.closeModal();
    props.executeScrollToContact();
  };

  return (
    <div className="menu-mobile">
      <div className="menu-links-mobile">
        <Link onClick={onClickAbout} to="/">
        {props.t("nav.about")} 
        </Link>
        <Link onClick={onClickTeam} to="/">
        {props.t("nav.team")}
        </Link>
        <Link onClick={onClickProducts} to="/">
        {props.t("nav.products")}
        </Link>
        <Link onClick={onClickContact} to="/">
        {props.t("nav.contact")}
        </Link>
        <div className="mobile-lang">
          <button
            onClick={props.onClickEnglish}
            className={
              props.activeEn ? "active-link-lang" : "disactive-link-lang"
            }
          >
            EN
          </button>
          /
          <button
            onClick={props.onClickSpanish}
            className={
              props.activeEs ? "active-link-lang" : "disactive-link-lang"
            }
          >
            ES
          </button>
        </div>
      </div>
    </div>
  );
}

export default menu;
