import React from "react";
import DesktopNav from "./DesktopNav";
import logo from "../../img/logo.png";
import Media from "react-media";
import "./nav.css";
import BurgerMenu from "./BurgerMenu";

function Navigation(props) {

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    if (window.innerWidth > 1000) {
      return;
    } else {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-id").style.top = "0";
      } else {
        document.getElementById("nav-id").style.top = "-5.2rem";
      }
      prevScrollpos = currentScrollPos;
    }
  };

  return (
    <div>
      <Media query={{ minWidth: 1000 }}>
        <DesktopNav
          t={props.t}
          handleClick={props.handleClick}
          aboutInViewport={props.aboutInViewport}
          productsInViewport={props.productsInViewport}
          contactInViewport={props.contactInViewport}
          teamInViewport={props.teamInViewport}
          executeScrollToAbout={props.executeScrollToAbout}
          executeScrollToHome={props.executeScrollToHome}
          executeScrollToProducts={props.executeScrollToProducts}
          executeScrollToTeam={props.executeScrollToTeam}
          executeScrollToContact={props.executeScrollToContact}
        />
      </Media>
      <Media query={{ maxWidth: 1000 }}>
        <div id="nav-id" className="navigation-mobile">
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
            executeScrollToTeam={props.executeScrollToTeam}
            executeScrollToContact={props.executeScrollToContact}
          />
        </div>
      </Media>
    </div>
  );
}

export default Navigation;
