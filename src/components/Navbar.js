import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <span className="navbar-logo">ALEKYA DUVVURI</span>

      {/* Hamburger for mobile */}
      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span className={open ? 'bar bar--open' : 'bar'} />
        <span className={open ? 'bar bar--open' : 'bar'} />
        <span className={open ? 'bar bar--open' : 'bar'} />
      </button>

      <ul className={`nav-links${open ? ' nav-links--open' : ''}`} onClick={() => setOpen(false)}>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-item nav-item--active' : 'nav-item'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'nav-item nav-item--active' : 'nav-item'}
          >
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
