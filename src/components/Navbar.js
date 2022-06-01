import React from 'react';
import { Link } from 'react-router-dom';
import links from '../Routes';

const Navbar = () => {
  return (
    <div>
      <h1>BookStore</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
