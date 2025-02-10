import React from "react";
import { useNavigate } from "react-router-dom";
import './Hero.css';
const Hero = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking");
  };

  return (
    <section className="hero">
    <div className="hero-content">
      <h2>Welcome to Hotel Sri Ranga Nivas</h2>
      <p>Your luxurious escape awaits</p>
      <button 
        onClick={handleBooking} 
      >
        Book Now
      </button>
    </div>
    </section>
  );
};

export default Hero;

