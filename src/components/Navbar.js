import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import links from '../Routes';
import './style-components/Navbar.css';

const Navbar = () => (
  <div className="navbarContainer">
    <div className="innerNav-menu">
      <h1>BookStore CMS</h1>
      <nav>
        <ul className="nav-menu-links">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'nav-item active' : 'nav-item inactive'
                }
                to={link.path}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <FaUser className="user-LogIn-icon" />
  </div>
);

export default Navbar;
