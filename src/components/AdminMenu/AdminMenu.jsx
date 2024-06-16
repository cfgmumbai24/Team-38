import React from 'react';
import './AdminMenu.css';

const AdminMenu = ({ setView }) => {
  return (
    <div className="admin-menu">
      <div className="menu-section">
        <h3 onClick={() => setView('home')} className="menu-item">
          Dashboard
        </h3>
        {/* <NavLink to="/dashboard" activeClassName="active-link">Overview</NavLink> */}
      </div>

      <div className="menu-section">
        <h3 onClick={() => setView('content')} className="menu-item">
          Content Management
        </h3>
        {/* <NavLink to="/content/upload" activeClassName="active-link">Upload Content</NavLink>
        <NavLink to="/content/manage" activeClassName="active-link">Manage Content</NavLink> */}
      </div>

     
      <div className="menu-section">
        <h3 onClick={() => setView('settings')} className="menu-item">
          Settings
        </h3>
        {/* <NavLink to="/settings/general" activeClassName="active-link">General Settings</NavLink>
        <NavLink to="/settings/profile" activeClassName="active-link">Profile Settings</NavLink> */}
      </div>

      {/* Upload Section */}
      <div className="menu-section">
        <h3 onClick={() => setView('upload')} className="menu-item">
          Upload
        </h3>
      </div>
    </div>
  );
};

export default AdminMenu;
