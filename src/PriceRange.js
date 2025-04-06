import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PriceRange.css";
import WhiteLogo from "./assets/WhiteLogo.png";
import Stats from "./assets/Stats.png"; // ✅ Import missing image
import Chest from "./assets/Chest.png"; // ✅ Import missing image

const PriceRange = () => {
  const navigate = useNavigate();

  // ✅ Cart state
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // ✅ Load cart details from localStorage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const total = cartItems.reduce(
      (acc, item) => acc + (parseFloat(item.price) || 0) * item.quantity,
      0
    );

    setCartCount(count);
    setTotalPrice(total);
  }, []);

  // ✅ Function to clear the cart
  const clearCart = () => {
    localStorage.removeItem("cart"); // Clear from localStorage
    setCartCount(0); // Reset cart count
    setTotalPrice(0); // Reset total price
  };

  // ✅ Cancel Order - Only clears the cart
  const handleCancelOrder = () => {
    clearCart();
  };

  // ✅ Start Over - Clears cart and redirects
  const handleStartOver = () => {
    clearCart();
    navigate("/app");
  };

  // ✅ Function to navigate to prebuilt PC pages
  const handleNavigation = (selectedCategory) => {
    // Retrieve selected purposes from URL params
    const searchParams = new URLSearchParams(window.location.search);
    const selectedPurposes = searchParams.get("purposes");
  
    if (!selectedPurposes) {
      alert("No purposes selected. Please go back and select a purpose.");
      return;
    }
  
    // Navigate to ProductList with selected purposes and category
    navigate(`/product-list?purposes=${selectedPurposes}&category=${selectedCategory}`);
  };
  

  return (
    <div className="price-range-container">
    {/* Logo */}
    <div className="header">
      <img src={WhiteLogo} alt="Logo" className="logo-image" />
    
  
    {/* Title */}
    <h1 className="price-title">PREBUILT PC'S</h1>
    </div>
    {/* Price Range Options */}
      <div className="price-options">
      <div className="price-option starter-option" onClick={() => handleNavigation("Starter")}>
        <h2>STARTER LEVEL BUILDS</h2>
        <p>₱10,000 - ₱20,000</p>
      </div>

  
      <div className="mid-level-container">
      <div className="price-option mid-entry-option" onClick={() => handleNavigation("Mid Entry")}>
        <h2>Mid Entry Level Build</h2>
        <p>₱20,000 - ₱30,000</p>
      </div>
  
      <div className="price-option mid-tier-option" onClick={() => handleNavigation("Mid Tier")}>
        <h2>Mid Tier Level Build</h2>
        <p>₱35,000 - ₱50,000</p>
      </div>
      </div>
  
      <div className="price-option high-mid-tier-option" onClick={() => handleNavigation("High Mid")}>
        <h2>High Mid Tier Builds</h2>
        <p>₱60,000 - ₱90,000</p>
      </div>
    </div>

      {/* Bottom Bar */}
      <div className="bottom-section">
        <div className="stats-icon">
          <img
            src={Stats}
            alt="Statistics Icon"
            onClick={() => navigate("/pentagon-stats")}
          />
          <p>STATISTICS</p>
        </div>

        <div className="process-container">
          <div className="order-info">
            <div className="cart-icon" data-count={cartCount}>
              <img src={Chest} alt="Cart Icon" />
              <span className="notification">{cartCount}</span>
            </div>
            <span className="price">₱{totalPrice.toLocaleString()}</span>
            <button
              className="order-summary"
              onClick={() => navigate("/order-summary")}
            >
              Order Summary
            </button>
          </div>

          <div className="action-buttons">
            <button className="cancel-order" onClick={handleCancelOrder}>
              Cancel Order
            </button>
            <button className="start-over" onClick={handleStartOver}>
              Start Over
            </button>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default PriceRange;
