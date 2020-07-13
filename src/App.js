import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import LandingComponent from "./pages/Landing/LandingComponent";
import ProjectsComponent from "./pages/Projects/ProjectsComponent";
import AboutComponent from "./pages/About/AboutComponent";
import ContactComponent from "./pages/Contact/ContactComponent";
import Navigation from './components/Navigation/Navigation';

const routes = [
  { path: "/", name: "Landing", Component: LandingComponent },
  { path: "/projects", name: "Projects", Component: ProjectsComponent },
  { path: "/about", name: "About", Component: AboutComponent },
  { path: "/contact", name: "Contact", Component: ContactComponent },
];

function App() {
  return (
    <>
      <Navigation/>
        {routes.map(({ path, Component }) => (
          <Route key="name" path={path} exact>
              {({ match }) => (
                <CSSTransition classNames='page' in={match != null} timeout={1000} unmountOnExit>
                  <Component />
                </CSSTransition>
              )}
          </Route>
        ))}
    </>
  );
}

export default App;
