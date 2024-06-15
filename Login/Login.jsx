// src/components/LoginPage.jsx
import React from 'react';
import './Login.css';
import backgroundImage from '../images/login.png';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={backgroundImage} alt="Background" className="background-image" />
        </div>
        <div className="login-form">
          <p className="login-subtitle"><h2>Welcome back!</h2></p>
          <div className="login-options">
          <div className="login-line"><h2>Do you want to log in as:</h2></div>
            <div className="options">
              <button className="login-option-button">Admin</button>
              <button className="login-option-button">User</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
