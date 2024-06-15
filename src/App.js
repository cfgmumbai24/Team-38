import React, { useState } from "react";
import UserInputForm from "./UserInputForm1";
import PathSuggestions from "./PathSuggestions1";
import Game from "./Game.js";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("SavingSimply");

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  const handleFormReset = () => {
    setUserData(null);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <h1>Select a Game</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="SavingSimply">Saving Simply</option>
        <option value="TestYourKnowledge">Test your knowledge game</option>
      </select>
      
      {selectedOption === "SavingSimply" && (
        <div className="card">
          <h2>Saving Simply</h2>
          <UserInputForm onSubmit={handleFormSubmit} onReset={handleFormReset} />
          {userData && <PathSuggestions userData={userData} />}
        </div>
      )}

      {selectedOption === "TestYourKnowledge" && (
        <div className="card2">
          <h2>Test your knowledge game</h2>
          <Game />
        </div>
      )}
    </div>
  );
};

export default App;
