import React, { useState } from "react";
import UserInputForm from "./UserInputForm1";
import PathSuggestions from "./PathSuggestions1";
import "./savingGame.css";

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  const handleFormReset = () => {
    setUserData(null);
  };

  return (
    <div className="App">
      <h1>Save Smart</h1>
      <div className="card">
        <h2>Saving Simply</h2>
        <UserInputForm onSubmit={handleFormSubmit} onReset={handleFormReset} />
        {userData && <PathSuggestions userData={userData} />}
      </div>
    </div>
  );
};

export default App;
