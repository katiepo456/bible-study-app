import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Matthew from './Matthew';
import Mark from './Mark';
import Luke from './Luke';
import John from './John';
import Test_John from './TestJohn';

import '../styling/NavBar.css';

const HomePage = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-left">
            <a href="/" className="logo">
              BibleApp
            </a>
          </div>
          <div className="navbar-center">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/matthew">Matthew</Link></li>
              <li><Link to="/mark">Mark</Link></li>
              <li><Link to="/luke">Luke</Link></li>
              <li><Link to="/john">John</Link></li>
              <li><Link to="/test_john">Test_John</Link></li>
            </ul>
          </div>
          <div className="navbar-right">
            <a href="/bible" className="bible-icon">
              <i className="bible-quick-link"></i>
            </a>
          </div>
        </nav>
    
        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/matthew" element={<Matthew />} />
          <Route path="/mark" element={<Mark />} />
          <Route path="/luke" element={<Luke />} />
          <Route path="/john" element={<John />} />
          <Route path="/test_john" element={<Test_John />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  )
}

export default HomePage;