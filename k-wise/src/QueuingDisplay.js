import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QueuingDisplay.css";
import WhiteLogo from "./assets/WhiteLogo.png"; // Ensure the logo file exists in the correct path

function QueuingDisplay() {
    const [queueNumber] = useState(localStorage.getItem("queueNumber") || ""); // Remove setQueueNumber
    const navigate = useNavigate();
  
    // Function to reset cart before going back
    const clearCart = () => {
      localStorage.removeItem("cart");  // Clear cart from localStorage
      window.dispatchEvent(new Event("cartReset")); // Notify cart components
    };
  
    // Automatically reset cart and navigate after timeout
    useEffect(() => {
      const timeout = setTimeout(() => {
        clearCart();
        navigate("/app");  // Go back to the starting page
      }, 10000); // 10 seconds timeout
  
      return () => clearTimeout(timeout);
    }, [navigate]); // Added 'navigate' to dependency array
  

  return (
    <div className="queuing-display-container">
      <img src={WhiteLogo} alt="Logo" className="logo" />
      <h1 className="status-text">Order complete</h1>
      <div className="queue-number-box">{queueNumber}</div>
      <h2 className="status-text">Wait for your turn</h2>
    </div>
  );
}

export default QueuingDisplay;
