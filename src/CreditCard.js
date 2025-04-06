import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreditCard.css";
import WhiteLogo from "./assets/WhiteLogo.png"; // Ensure the logo file exists in the correct path

function CreditCard() {
  const navigate = useNavigate();

  return (
    <div className="credit-card-container">
      <img src={WhiteLogo} alt="Logo" className="logo" />
      <h1 className="title">Select your Bank</h1>

      <div className="card-options">
        <button className="card-button">MASTER CARD</button>
        <button className="card-button">VISA</button>
      </div>

      <button className="back-button-credit" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}

export default CreditCard;