import React from 'react'
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbarContainer">
      <div>
        <img src="newlogo.jpeg" alt="logo" className="imageLogo" />
      </div>
      <ul className="navList">
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About Us</li>
        </Link>
        <Link to="/service">
          <li>Services</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
      </ul>
      <div>
        <button type="submit" className="buttonL">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar