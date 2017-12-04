import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className='router-container'>
            <NavLink exact to='/'>
              <h1 className='app-title'>Wesley Maffly-Kipp</h1>
            </NavLink>
            <nav className='app-navbar'>
              <NavLink to='/about' className='app-navlink'>About Me</NavLink>
              <NavLink to='/projects' className='app-navlink'>Projects</NavLink>
              <NavLink to='/contact' className='app-navlink'>Contact</NavLink>
            </nav>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
