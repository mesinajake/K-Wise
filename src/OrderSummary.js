import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OrderSummary.css"; // Import CSS
import Stats from "./assets/Stats.png";

function OrderSummary() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); // Get previous navigation state

  // Get previous category index (default to 0 if undefined)
  const previousCategory = location.state?.selectedCategory ?? 0;

  //Function for storing and displaying the updated add-to-cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (index, amount) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += amount;

    if (updatedCart[index].quantity < 1) updatedCart[index].quantity = 1;

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Ensure price is a number (handles cases where price might be a string with "₱")
  const getPrice = (item) => {
    if (!item.price) return 0;
    return typeof item.price === "number" 
      ? item.price 
      : parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
  };  

  // Compute total price dynamically
  const totalPrice = cartItems.reduce((acc, item) => acc + getPrice(item) * item.quantity, 0);

  return (
    <div className="container">
      <h1 className="title">ORDER SUMMARY</h1>

      {cartItems.length === 0 ? (
        <p className="emptyCart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => {
            const itemPrice = getPrice(item);
            const subtotal = itemPrice * item.quantity;

            return (
            <div key={index} className="itemContainer">
              <div className="productWrapper">
                {/* Product name at the top */}
                <img src={item.image} alt={item.name} className="productImage" />
                <p className="productName">{item.name}</p>
              </div>

              <div className="priceAndControls">
                <div className="priceContainer">
                  <p className="productPrice">₱{itemPrice.toLocaleString()}</p>
                  <p className="productSubtotal">Subtotal: ₱{subtotal.toLocaleString()}</p>
                </div>

                <div className="quantityControls">
                  
                  <button onClick={() => updateQuantity(index, -1)} className="quantityBtn">−</button>
                  <span className="quantityProduct">{item.quantity}</span>
                  <button onClick={() => updateQuantity(index, 1)} className="quantityBtn">+</button>
                  
                  <button onClick={() => removeItem(index)} className="removeBtn">Remove Item</button>
                </div>
                
              </div>
            </div>
            );
          })}
        </div>
      )}

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="stats-icon">
          <img src={Stats} alt="Statistics Icon" />
          <p>STATISTICS</p>
        </div>

        <div className="process-container">
          <div className="total-info">
            <h1 className="total-label">Total</h1>
            <span className="price">₱{totalPrice.toLocaleString()}</span>
          </div>

          <div className="action-buttons">
            <button className="order-more" onClick={() => navigate("/pc-parts", { state: { selectedCategory: previousCategory } })}>Order More</button> 
            <button className="proceed-payment" onClick={() => navigate("/payment-window")}>Proceed to Payment</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
