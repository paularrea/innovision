import React, {useState, useEffect} from "react";

import BurguerMenu from "./BurguerMenu";
import DesktopNav from "./DesktopNav";
import logo from "../../img/innovision.png";
import HideOnScroll from "../HideOnScroll";
import Media from "react-media";
import "./nav.css";

function Navigation(props) {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY < 72 * window.innerHeight/100) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    };
  
    window.addEventListener("scroll", changeNavColor);
  }, [])



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
          <div id="nav-id" className={navbar ? "navigation-mobile" : "transparent-burgerNav"}>
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
      </Media>
    </div>
  );
}

export default Navigation;
