// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload/FileUpload';
import AdminMenu from './components/AdminMenu/AdminMenu';
import HeroSection from './components/HeroSection/HeroSection';
import HelpSection from './components/HelpSection/HelpSection';

const App = () => {
  const [view, setView] = useState('home'); // State to manage the current view

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Multiply</div>
        <div className="navbar-admin">Creador Foundation</div>
        <div className="navbar-admin">Member</div>
      </nav>
      <div className="content">
        <AdminMenu setView={setView} /> {/* Pass setView to AdminMenu */}
        <main className="main-container">
          {view === 'home' && <HeroSection />}
          {/* {view === 'help' && <HelpSection />} */}
          {view === 'upload' && <FileUpload />}
          {/* Add other views as needed */}
        </main>
      </div>
      <footer className="footer">
        <p>&copy; 2024 NGO List. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
