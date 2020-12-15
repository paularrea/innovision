import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./i18n";
import logo from '../src/img/logo.png'

const App = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./App")), 2500);
  });
});

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Suspense
        fallback={
          <div className="intro-logo-container">
            <div className="intro-logo animate apear">
              <img src={logo} alt="innovision logo" />
            </div>
          </div>
        }
      >
        <App />
      </Suspense>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
