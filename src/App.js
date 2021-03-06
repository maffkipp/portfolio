import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import About from "./components/About.js";
import Projects from "./components/Projects.js";
import ProjectFull from "./components/ProjectFull.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

// Parent component including router
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="router-container">
            <div className="app-title-container">
              <h1 className="app-title">Wesley Maffly-Kipp</h1>
              <p className="app-subtitle">Full-Stack Web Developer</p>
            </div>
            <nav className="app-navbar">
              <NavLink to="/about" className="app-navlink">
                About Me
              </NavLink>
              <NavLink to="/projects" className="app-navlink">
                Projects
              </NavLink>
              <NavLink to="/contact" className="app-navlink">
                Contact
              </NavLink>
            </nav>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Redirect to="/projects" />}
              />
              <Route path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/projects/:id"
                component={props => <ProjectFull propData={{ ...props }} />}
              />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
