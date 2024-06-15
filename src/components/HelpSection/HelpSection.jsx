// src/components/HelpSection/HelpSection.jsx
import React, { useState } from 'react';
import './HelpSection.css';

const HelpSection = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (message.trim()) {
      
      const omkarpayload = { query: message };
      setChatHistory([...chatHistory, { text: message, user: 'user' }]);
      setMessage('');
      setLoading(true);

      try {
        const initialresponse = await fetch('http://localhost:8000/search/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(omkarpayload),
        });

        // console.log(initialresponse);
        const omkardata = await initialresponse.json();
        console.log(omkardata.transcription);
        const payload = { scriptText:omkardata.transcription };

        const response = await fetch('http://localhost:4000/generate-video', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setVideoUrl(data.videoUrl);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCloseModal = () => {
    setVideoUrl('');
  };

  return (
    <div className="help-section">
      <div className="chat-container">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={handleSend}>
          Send
        </button>
      </div>

      {loading && (
        <div className="modal">
          <div className="modal-content">
            <div className="loader"></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {videoUrl && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>×</button>
            <video width="100%" height="auto" controls autoPlay>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpSection;
