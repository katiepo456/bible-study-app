import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from './About';
import Matthew from './Matthew';
import Mark from './Mark';
import Luke from './Luke';
import John from './John';

import '../styling/NavBar.css';

const HomePage = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-left">
            <a className="logo">
              <img src="src/bible_app_logo.png" alt="logo" width="30" height="25"/>
              Evangelii Gaudium
            </a>
          </div>
          <div className="navbar-center">
            <ul className="nav-links"/>
          </div>
          <div className="navbar-right">
          <ul className="nav-links">
              <li><Link to="/matthew">MATTHEW</Link></li>
              <li><Link to="/mark">MARK</Link></li>
              <li><Link to="/luke">LUKE</Link></li>
              <li><Link to="/john">JOHN</Link></li>
            </ul>
          </div>
        </nav>
    
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/matthew" element={<Matthew />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/luke" element={<Luke />} />
          <Route path="/john" element={<John />} />
          <Route path="/about" element={<About />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  )
}

export default HomePage;