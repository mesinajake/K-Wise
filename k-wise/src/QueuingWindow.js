import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QueuingWindow.css";
import WhiteLogo from "./assets/WhiteLogo.png"; // Ensure the logo file exists in the correct path

function QueuingWindow() {
  const [queueNumber, setQueueNumber] = useState("00");
  const navigate = useNavigate();

  const handleButtonClick = (value) => {
    if (value === "DEL") {
      setQueueNumber(queueNumber.slice(0, -1) || "0");
    } else {
      setQueueNumber((prev) => (prev === "00" ? value : prev + value));
    }
  };

  const handleEnter = () => {
    localStorage.setItem("queueNumber", queueNumber); // Store in localStorage
    navigate("/queuing-display"); // Navigate to the display page
  };

  return (
    <div className="queuing-container">
      <img src={WhiteLogo} alt="Logo" className="logo" />
      <h1 className="queuing-title">
        Get a <span className="highlight">KCard</span> and enter the queue number
      </h1>
      <input type="text" value={queueNumber} className="queue-input" readOnly />

      {/* Keypad */}
      <div className="keypad">
        {[1, 2, 3].map((key) => (
          <button key={key} onClick={() => handleButtonClick(key.toString())}>
            {key}
          </button>
        ))}
        <button className="del-button" onClick={() => handleButtonClick("DEL")}>DEL</button>

        {[4, 5, 6].map((key) => (
          <button key={key} onClick={() => handleButtonClick(key.toString())}>
            {key}
          </button>
        ))}

        {[7, 8, 9].map((key) => (
          <button key={key} onClick={() => handleButtonClick(key.toString())}>
            {key}
          </button>
        ))}
        <button className="zero-button" onClick={() => handleButtonClick("0")}>0</button>
      </div>
      
      <button className="enter-button-queue" onClick={handleEnter}>Enter</button>
      <button className="back-button-queue" onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default QueuingWindow;
