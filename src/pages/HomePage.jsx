import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Bible from './Bible';
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
              <li><Link to="/bible">Bible</Link></li>
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
          <Route path="/bible" element={<Bible />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  )
}

export default HomePage