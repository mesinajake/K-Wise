import React from "react";
import { useNavigate } from "react-router-dom";
import WhiteLogo from "./assets/WhiteLogo.png";
import "./PaymentWindow.css";

const PaymentWindow = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-container">
      {/* Logo */}
      <div className="logo-container">
        <img src={WhiteLogo} alt="Logo" className="logo" />
      </div>

      {/* Title */}
      <h1 className="payment-title">How would you like to pay?</h1>

      {/* Payment Options */}
      <div className="payment-options">
        <button className="payment-button" onClick={() => navigate("/queuing-window")}>
          CASH
        </button>
        <button className="payment-button" onClick={() => navigate("/online-banking")}>ONLINE BANKING</button>
        <button className="payment-button" onClick={() => navigate("/credit-card")}>CREDIT</button>
        <button className="payment-button">INSTALLMENT</button>
      </div>

      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button-payment">
        Back
      </button>
    </div>
  );
};

export default PaymentWindow;
