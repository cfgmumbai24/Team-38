import React from 'react';
import './PathCard.css';

const PathCard = ({ title, amount, risk, learnMoreUrl }) => {
  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low':
        return '#d4edda'; // light green
      case 'Medium':
        return '#fff3cd'; // light yellow
      case 'High':
        return '#f8d7da'; // light red
      default:
        return 'white';
    }
  };

  return (
    <div className="card" style={{ backgroundColor: getRiskColor(risk) }}>
      <h3>{title}</h3>
      <p>Expected Amount: ₹{amount}</p>
      <p>Risk Level: {risk}</p>
      <a href={learnMoreUrl} target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  );
};

export default PathCard;
