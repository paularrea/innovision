import React from "react";
import { NavLink, Router } from "react-router-dom";
import BurguerMenu from "./burguerMenu";

function Navigation() {
  return (
    <div>
      {window.innerWidth >= 500 ? (
        <div className="navigation text-dark d-flex justify-content-between align-items-center">
          <div>
            <h4 className="name">PAU LARREA</h4>
          </div>
          <div className="menu-links d-flex align-items-center">
       
              <NavLink to="/" exact activeClassName='active-link'>
                Home
              </NavLink>
              <NavLink to="/projects" exact activeClassName='active-link'>
                Products
              </NavLink>
              <NavLink to="/about" exact activeClassName='active-link'>
                About
              </NavLink>
              <NavLink to="/contact" exact activeClassName='active-link'>
                Contact
              </NavLink>

          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-end align-items-center">
          <BurguerMenu />
        </div>
      )}
    </div>
  );
}

export default Navigation;
