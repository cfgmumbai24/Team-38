import React, { useState } from 'react';
import './App.css';
import AdminMenu from './components/AdminMenu/AdminMenu';
import HeroSection from './components/HeroSection/HeroSection';
import FileUpload from './components/FileUpload/FileUpload';

const App = () => {
  const [view, setView] = useState('home');

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">Multiply</div>
        <div className="navbar-admin">Creador Foundation</div>
        <div className="navbar-admin">Admin</div>
      </nav>
      <div className="content">
        <AdminMenu setView={setView} />
        <main className="main-container">
          {/* Conditional rendering based on view state */}
          {view === 'home' && <HeroSection />}
          {view === 'upload' && <FileUpload />}
          {/* Add more conditional rendering for other views as needed */}
        </main>
      </div>
      <footer className="footer">
        <p>&copy; 2024 NGO List. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
