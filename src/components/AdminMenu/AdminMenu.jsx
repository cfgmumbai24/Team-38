// src/components/AdminMenu/AdminMenu.js
import React from 'react';
import './AdminMenu.css';

const AdminMenu = ({ setView }) => {
  return (
    <div className="admin-menu">
      <div className="menu-section">
        <h3 onClick={() => setView('home')} className="menu-item">
          Dashboard
        </h3>
      </div>

      <div className="menu-section">
        <h3 onClick={() => setView('content')} className="menu-item">
          Content Management
        </h3>
      </div>

      <div className="menu-section">
        <h3 onClick={() => setView('categories')} className="menu-item">
          Categories
        </h3>
      </div>

      <div className="menu-section">
        <h3 onClick={() => setView('users')} className="menu-item">
          User Management
        </h3>
      </div>

      <div className="menu-section">
        <h3 onClick={() => setView('settings')} className="menu-item">
          Settings
        </h3>
      </div>

      <div className="menu-section">
        <h3 onClick={() => setView('help')} className="menu-item">
          Help
        </h3>
      </div>

      {/* <div className="menu-section">
        <h3 onClick={() => setView('upload')} className="menu-item">
          Upload
        </h3>
      </div> */}
    </div>
  );
};

export default AdminMenu;
