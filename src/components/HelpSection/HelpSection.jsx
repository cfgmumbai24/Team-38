// src/components/HelpSection/HelpSection.jsx
import React from 'react';
import './HelpSection.css';

const HelpSection = () => {
  return (
    <div className="help-section">
      <h2>I need help with...</h2>
      <div className="help-buttons">
        <button>+ LOANS</button>
        <button>+ BANKING</button>
        <button>+ SAVINGS</button>
        <button>+ TAXATION</button>
        <button>+ INSURANCE</button>
        <button>+ INVESTMENTS</button>
        <button>+ BASICS OF MONEY</button>
        <button>+ FINANCIAL RECORD</button>
        <button>+ RETIREMENT PLANNING</button>
        <button>+ SCAMS AND PONZI SCHEMES</button>
        <button>+ DIGITAL FINANCIAL SERVICES</button>
        <button>+ FINANCIAL INDEPENDENCE AND YOU</button>
        <button>+ FINANCIAL PLANNING AND BUDGETING</button>
        <button>+ CONSUMER PROTECTION AND GRIEVANCE REDRESSAL</button>
      </div>
      <button className="get-started">GET STARTED</button>
    </div>
  );
}

export default HelpSection;
