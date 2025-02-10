import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
    
      <div className="logo">
        <h1>Sri Ranga Nivas</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#Footer">About Us</a></li>
          <li><a href="#Footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
