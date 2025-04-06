import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductList.css";
import WhiteLogo from "./assets/WhiteLogo.png";
import Stats from "./assets/Stats.png"; // ✅ Import missing image
import Chest from "./assets/Chest.png"; // ✅ Import missing image

// Product Images
import StarterBuildA from "./assets/StarterBuildA.png";
import StarterBuildB from "./assets/StarterBuildB.png";
import StarterBuildC from "./assets/StarterBuildC.png";
import MidEntryBuildA from "./assets/MidEntryBuildA.png";
import MidEntryBuildB from "./assets/MidEntryBuildB.png";
import MidEntryBuildC from "./assets/MidEntryBuildC.png";
import MidTierBuildA from "./assets/MidTierBuildA.png";
import MidTierBuildB from "./assets/MidTierBuildB.png";
import MidTierBuildC from "./assets/MidTierBuildC.png";
import MidTierBuildD from "./assets/MidTierBuildD.png";
import HighMidTierBuildA from "./assets/HighMidTierBuildA.png";
import HighMidTierBuildB from "./assets/HighMidTierBuildB.png";
import HighMidTierBuildC from "./assets/HighMidTierBuildC.png";

// Product list
const pcProducts = [
  { id: 1, name: "Starter Build A", price: 15999, category: "Starter", purposes: ["Work", "Multimedia"], image: StarterBuildA },
  { id: 2, name: "Starter Build B", price: 17999, category: "Starter", purposes: ["Gaming", "Multimedia"], image: StarterBuildB },
  { id: 3, name: "Starter Build C", price: 19999, category: "Starter", purposes: ["Gaming", "Work", "Multimedia"], image: StarterBuildC },
  { id: 4, name: "Mid Entry Build A", price: 20999, category: "Mid Entry", purposes: ["Work", "Multimedia"], image: MidEntryBuildA },
  { id: 5, name: "Mid Entry Build B", price: 23999, category: "Mid Entry", purposes: ["Gaming", "Multimedia"], image: MidEntryBuildB },
  { id: 6, name: "Mid Entry Build C", price: 29999, category: "Mid Entry", purposes: ["Gaming", "Work", "Multimedia"], image: MidEntryBuildC },
  { id: 7, name: "Mid Tier Build A", price: 35999, category: "Mid Tier", purposes: ["Gaming", "Work"], image: MidTierBuildA },
  { id: 8, name: "Mid Tier Build B", price: 39999, category: "Mid Tier", purposes: ["Work", "Multimedia"], image: MidTierBuildB },
  { id: 9, name: "Mid Tier Build C", price: 46999, category: "Mid Tier", purposes: ["Gaming", "Multimedia"], image: MidTierBuildC },
  { id: 10, name: "Mid Tier Build D", price: 47999, category: "Mid Tier", purposes: ["Gaming", "Work", "Multimedia"], image: MidTierBuildD },
  { id: 11, name: "High Mid Build A", price: 57999, category: "High Mid", purposes: ["Gaming", "Multimedia"], image: HighMidTierBuildA },
  { id: 12, name: "High Mid Build B", price: 63999, category: "High Mid", purposes: ["Gaming", "Work", "Multimedia"], image: HighMidTierBuildB },
  { id: 13, name: "High Mid Build C", price: 80999, category: "High Mid", purposes: ["Gaming", "Work", "Multimedia"], image: HighMidTierBuildC },
];

// Purpose colors
const purposeColors = {
  Gaming: "#003FE0",
  Work: "#E0005D",
  Multimedia: "#E05A00",
};

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPurposes = searchParams.get("purposes")?.split(",").map(p => p.trim().toLowerCase()) || [];
  const selectedCategory = searchParams.get("category");

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
    localStorage.removeItem("cart");
    setCartCount(0);
    setTotalPrice(0);
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

  const priceRanges = {
    Starter: { min: 10000, max: 20000 },
    "Mid Entry": { min: 20000, max: 30000 },
    "Mid Tier": { min: 35000, max: 50000 },
    "High Mid": { min: 50000, max: 90000 },
  };

  if (!selectedCategory || !priceRanges[selectedCategory]) {
    return (
      <div className="error-message">
        <p>Please select a valid category from the homepage.</p>
        <p>Available categories: Starter, Mid Entry, Mid Tier, High Mid</p>
      </div>
    );
  }

  const filteredByCategory = pcProducts.filter((product) => {
    return product.category.toLowerCase().trim() === selectedCategory.toLowerCase().trim();
  });

  const filteredByCategoryAndPrice = filteredByCategory.filter((product) => {
    return (
      product.price >= priceRanges[selectedCategory].min &&
      product.price <= priceRanges[selectedCategory].max
    );
  });

  const filteredByCategoryPriceAndPurpose = filteredByCategoryAndPrice.filter((product) => {
    const productPurposes = product.purposes.map(p => p.toLowerCase());
    return selectedPurposes.every(purpose => productPurposes.includes(purpose));
  });

  const filteredProducts = filteredByCategoryPriceAndPurpose;

  return (
    <div className="product-list-container">
      <div className="build-header">
        <img src={WhiteLogo} alt="Logo" className="build-logo" />
        <h1 className="price-title">PREBUILT PC'S</h1>
      </div>

      <div className="category-name">
        <h1>{selectedCategory} Level PC Builds</h1>
      </div>

      <div className="product-build-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-build-card" key={product.id}>
              <div className="image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-build-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "./assets/fallback-image.png";
                  }}
                />
              </div>
                <div className="purpose-build-tags">
                  {product.purposes.map((purpose) => (
                    <span
                      key={purpose}
                      className="purpose-build-tag"
                      style={{ backgroundColor: purposeColors[purpose] }}
                    >
                      {purpose}
                    </span>
                  ))}
                </div>
                <div className="product-build-info">
                <h3 className="product-build-name">{product.name}</h3>
                <p className="product-build-price">₱{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products-message">
            <p>No products found matching your criteria.</p>
            <p>Category: {selectedCategory}</p>
            <p>Purposes: {selectedPurposes.join(", ") || "Any"}</p>
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="bottom-section" style={{ paddingLeft: "25px", marginLeft: "35px" }}>
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

export default ProductList;
