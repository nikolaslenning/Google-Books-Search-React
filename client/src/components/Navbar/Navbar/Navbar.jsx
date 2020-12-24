import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-brand">
        <span>Google Books Search</span>
      </div>

      <ul className="Navbar-links">
        
        <li className="Navbar-link">
          <Link className="link" to="/">
            Search
          </Link>
        </li>

        <li className="Navbar-link">
          <Link className="link" to="/saved">
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

