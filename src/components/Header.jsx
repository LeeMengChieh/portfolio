import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import img from '../utils/imgPath';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-md custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <div className="logo">
              <img src={img('/imgs/state=Default.svg')} className="img img-a" alt="Logo Default" />
              <img src={img('/imgs/state=Hover.svg')} className="img img-b" alt="Logo Hover" />
            </div>
          </Link>
          <button 
            className={`custom-toggler ${isOpen ? 'active' : ''}`} 
            type="button" 
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" onClick={closeMenu}>
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/design" onClick={closeMenu}>
                  Design
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/illustration" onClick={closeMenu}>
                  illustration
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/japanese" onClick={closeMenu}>
                  Notes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
