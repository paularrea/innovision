import React, { useState, useEffect } from "react";
import DesktopNav from "./DesktopNav";
import logo from "../../img/logo.png";
import whiteLogo from "../../img/whitelogo.png";
import Media from "react-media";
import "./nav.css";
import BurgerMenu from "./BurgerMenu";

function Navigation(props) {
  const [navbar, setNavbar] = useState(false);

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    if (window.innerWidth > 1000) {
      return;
    } else {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || currentScrollPos || (document.getElementById("nav-id") === null)  === 0) {
        document.getElementById("nav-id").style.top = "0";
      } else {
        document.getElementById("nav-id").style.top = "-5.2rem";
      }
      prevScrollpos = currentScrollPos;
    }
  };

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY < (100 * window.innerHeight) / 100) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    };

    window.addEventListener("scroll", changeNavColor);
  }, []);

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
        <div
          id="nav-id"
          className={
            navbar ? "navigation-mobile" : "navigation-mobile-transparent"
          }
        >
          <div>
            <a href onClick={props.executeScrollToHome}>
              <img
                className="logo"
                src={navbar ? logo : whiteLogo}
                alt="innovision logo"
              />
            </a>
          </div>

          <BurgerMenu
            navbar={navbar}
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
