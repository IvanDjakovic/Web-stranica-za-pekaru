import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Pekara "IV-ANJA"</h1>
      <p className="navbar-location">Lokacija: Vrbanjci BB, Kotor Varoš</p>
      <ul className="navbar-links">
        <li><Link to="/kontakti" className="navbar-link">Kontakti</Link></li>
        <li><Link to="/proizvodi" className="navbar-link">Proizvodi</Link></li>
        <li><Link to="/onama" className="navbar-link">O nama</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
