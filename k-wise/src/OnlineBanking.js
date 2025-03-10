import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnlineBanking.css";
import WhiteLogo from "./assets/WhiteLogo.png"; // Ensure the logo file exists in the correct path

function OnlineBanking() {
  const navigate = useNavigate();

  return (
    <div className="online-banking-container">
      <img src={WhiteLogo} alt="Logo" className="logo" />
      <h1 className="banking-title">Select your Bank</h1>

      <div className="bank-options">
        <button className="bank-button">MASTER CARD</button>
        <button className="bank-button">VISA</button>
        <button className="bank-button">GCash</button>
      </div>

      <button className="back-button-bank" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default OnlineBanking;
