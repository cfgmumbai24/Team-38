import React, { useState } from "react";
import "./UserInputForm.css";
import w1 from "./1.png";
import w2 from "./2.png";
import w3 from "./3.png";
import w4 from "./4.png";


const UserInputForm = ({ onSubmit, onReset }) => {
  const [step, setStep] = useState(0);
  const [timeFrame, setTimeFrame] = useState("");
  const [monthlySavings, setMonthlySavings] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ timeFrame, monthlySavings, currentSavings });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleReset = () => {
    setStep(0);
    setTimeFrame("");
    setMonthlySavings("");
    setCurrentSavings("");
    onReset();
  };

  return (
    <div className="slideshow-container">
      {step === 0 && (
        <div className="slide">
          <img src={w1} alt="Intro" />
          <p>
            Welcome to the Save Smart. Click next to get started!
          </p>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 1 && (
        <div className="slide">
          <img src={w2} alt="Time Frame" />
          <label>Time Frame (years):</label>
          <input
            type="number"
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            required
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep} disabled={!timeFrame}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="slide">
          <img src={w3} alt="Monthly Savings" />
          <label>Monthly Savings:</label>
          <input
            type="number"
            value={monthlySavings}
            onChange={(e) => setMonthlySavings(e.target.value)}
            required
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep} disabled={!monthlySavings}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div className="slide">
          <img src={w4} alt="Current Savings" />
          <label>Current Savings:</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={handleSubmit} disabled={!currentSavings}>Submit</button>
        </div>
      )}
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default UserInputForm;