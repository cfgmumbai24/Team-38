// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <img src="https://multiply.org.in/wp-content/uploads/2023/10/Landing-page-characters-e1700634240167.png" alt="Illustration" className="hero-image" />
        <div className="hero-text">
          <h1>Hi, don’t walk into tomorrow without financial knowledge</h1>
          <p>Start learning about personal finance, today!</p>
          <div className="hero-stats">
            <div className="stat-item">
              <p>114</p>
              <p>Total Users</p>
            </div>
            <div className="stat-item">
              <p>139</p>
              <p>Guides</p>
            </div>
            <div className="stat-item">
              <p>14</p>
              <p>Informational Videos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
