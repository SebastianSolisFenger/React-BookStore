import React from 'react';
import { Link } from 'react-router-dom';
import links from '../Routes';

const Navbar = () => (
  <div className="navBar">
    <h1>BookStore CMS</h1>
    <nav>
      <ul className="nav-menu-links">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Navbar;
