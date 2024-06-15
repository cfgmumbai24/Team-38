import React, { useState } from 'react';
import { questionsData } from './questionsData'; // Adjust the path as per your project structure
import './Game.css';

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setIsAnswerCorrect(null); // Reset answer correctness state
    } else {
      // Handle end of questions (optional)
      setCurrentQuestionIndex(0); // Loop back to the first question
      setIsAnswerCorrect(null); // Reset answer correctness state
    }
  };

  const handleOptionClick = (option) => {
    // Determine if the selected option is correct (assuming option.answer is a boolean)
    setIsAnswerCorrect(option.answer);
  };

  if (questionsData.length === 0) {
    return <div>Loading...</div>;
  }

  const { question, options } = questionsData[currentQuestionIndex];

  return (
    <div className="game-container">
        <div className="game-head"></div>
      <div className="question-container">
        <h2 className="question-text">{question}</h2>
      </div>
      <div className="options-container">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${isAnswerCorrect !== null && option.answer === isAnswerCorrect ? 'correct' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            <img src={option.image} alt={`Option ${index + 1}`} className="option-image" />
          </div>
        ))}
      </div>
      <div className="feedback">
        {isAnswerCorrect !== null && (
          <p>{isAnswerCorrect ? 'Correct!' : 'Incorrect!'}</p>
        )}
      </div>
      <button className="btn-donate" onClick={handleNextQuestion}>
        Next Question!
    </button>
    </div>
  );
};

export default Game;
