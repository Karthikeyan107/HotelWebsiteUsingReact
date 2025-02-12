import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <header className="header">
    
      <div className="logo">
        <h1>Sri Ranga Nivas</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/" onClick={handleHome}>Home</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#Footer">About Us</a></li>
          <li><a href="#Footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
