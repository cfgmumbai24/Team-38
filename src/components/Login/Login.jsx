// src/components/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import backgroundImage from '../images/login.jpg';

const Login = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/admin');
  };

  const handleUserLogin = () => {
    navigate('/user');
  };

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
              <button className="login-option-button" onClick={handleAdminLogin}>Admin</button>
              <button className="login-option-button" onClick={handleUserLogin}>User</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
