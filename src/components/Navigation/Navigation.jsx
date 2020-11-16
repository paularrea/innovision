import React from "react";

import DesktopNav from "./DesktopNav";
import logo from "../../img/innovision.png";
import HideOnScroll from "../HideOnScroll";
import Media from "react-media";
import "./nav.css";
import BurgerMenu from "./BurgerMenu";

function Navigation(props) {

  return (
    <div>
      <Media query={{ minWidth: 1000 }}>
        <DesktopNav
          t={props.t}
          handleClick={props.handleClick}
          aboutInViewport={props.aboutInViewport}
          productsInViewport={props.productsInViewport}
          projectsInViewport={props.projectsInViewport}
          contactInViewport={props.contactInViewport}
          teamInViewport={props.teamInViewport}
          executeScrollToAbout={props.executeScrollToAbout}
          executeScrollToHome={props.executeScrollToHome}
          executeScrollToProducts={props.executeScrollToProducts}
          executeScrollToProjects={props.executeScrollToProjects}
          executeScrollToTeam={props.executeScrollToTeam}
          executeScrollToContact={props.executeScrollToContact}
        />
      </Media>
      <Media query={{ maxWidth: 1000 }}>
        <HideOnScroll>
          <div
            id="nav-id"
            className="navigation-mobile"
          >
            <div>
              <a href onClick={props.executeScrollToHome}>
                <img className="logo" src={logo} alt="innovision logo" />
              </a>
            </div>

            <BurgerMenu
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
      </Media>
    </div>
  );
}

export default Navigation;
