import React from 'react'
import "./style.css";


const Hero = () => {
  return (
    <section>
      <div className="hero-section">
        <div className="image-contain">
          <img
            className="hero-image"
            src="https://raw.githubusercontent.com/Olliemint/Airbnb-experiences/main/src/images/Group77.png"
            alt="no image"
          />
        </div>
        <div className="hero-details">
          <h1 className="hero-title">Online Experiences</h1>
          <p className="h-message">
            Join unique interactive activities led by
            <br />
            one-of-a-kind hosts—all without leaving home
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero