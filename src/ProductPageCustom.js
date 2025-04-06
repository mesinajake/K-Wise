import React from "react";
import{ useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./ProductPage.css"; // Ensure you have the correct CSS file
import Stats from "./assets/Stats.png";
import { menuItems } from "./PC-Parts";
import { updateCartIcon } from "./PC-Parts";



// Define placeholderComponent before use
const placeholderComponent = {
  id: "placeholder",
  name: "Coming Soon",
  price: "₱0.00",
  image: "./assets/default.png",
};


function ProductPage() {
  const { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);




    // Get previous category index from state (default to 0 if undefined)
    const previousCategory = location.state?.previousCategory ?? 0

    // Extract category and index from productId (Format: category-index)
    const [category, index] = productId.split("-");
  
    // Find the category in menuItems
    const categoryData = menuItems.find((item) => item.category === category);
  
    // Get the product details based on index
    const product = categoryData?.products?.[Number(index)];
  
    const productDetails = product || location.state || {
      name: "Unknown Product",
      price: "₱0.00",
      image: "./assets/default.png",
      details: "No details available.",
      specifications: "No specifications provided."
    };




  //Function for every time they add-to-cart it will count
  // Convert price from string (e.g., "₱1000") to number
  const productPrice = parseFloat(productDetails.price.replace("₱", "").replace(",", "")) || 0;

  // Manage quantity state
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productPrice);

  // Handle quantity change
  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * productPrice);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * productPrice);
    }
  };

  // Function for adding item to cart
  const addToCart = () => {
    const newItem = {
      ...productDetails,
      quantity,
      totalPrice,
      uniqueId: Date.now() // Unique identifier for each cart item
    };

    let updatedCart = [...cart];

    // Check if the product already exists in the cart
    const existingIndex = updatedCart.findIndex(item => item.name === newItem.name);
    if (existingIndex !== -1) {
      // Update existing item quantity and total price
      updatedCart[existingIndex].quantity += quantity;
      updatedCart[existingIndex].totalPrice += totalPrice;
    } else {
      updatedCart.push(newItem);
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCartIcon();

    navigate("/pc-customized", { state: { selectedCategory: previousCategory } });
  };
  
  

  
  // Define compatibility rules based on selected category
  const compatibilityMap = {
    "cpu": ["motherboard", "gpu", "ram", "storage", "power supply", "case", "peripherals"],
    "motherboard": ["cpu", "ram", "gpu", "storage", "power supply", "case", "peripherals"],
    "gpu": ["cpu", "motherboard", "ram", "power supply", "case", "peripherals"],
    "ram": ["cpu", "motherboard", "storage", "power supply", "case", "peripherals"],
    "storage": ["cpu", "motherboard", "ram", "power supply", "case", "peripherals"],
    "power supply": ["cpu", "motherboard", "gpu", "ram", "storage", "case", "peripherals"],
    "case": ["cpu", "motherboard", "gpu", "ram", "storage", "power supply", "peripherals"],
    "peripherals": ["cpu", "motherboard", "gpu", "ram", "storage", "power supply", "case"]
  };

  // Get compatible categories based on the selected product's category
  const compatibleCategories = compatibilityMap[category] || [];

// Function to get a random product from a category
const getRandomProduct = (category) => {
  const categoryItem = menuItems.find((item) => item.category === category);
  if (!categoryItem || categoryItem.products.length === 0) return null;
  
  const randomIndex = Math.floor(Math.random() * categoryItem.products.length);
  return {
    id: `${category}-${randomIndex}`,
    name: categoryItem.products[randomIndex].name || "Unnamed Product",
    price: categoryItem.products[randomIndex].price || "₱0.00",
    image: categoryItem.products[randomIndex].image || "./assets/default.png",
  };
};

// Get compatible components by selecting one random product per category
const [compatibleComponents] = useState(() => {
  let components = compatibleCategories
    .map(getRandomProduct)
    .filter((product) => product !== null);

  while (components.length < 6) {
    components.push({ ...placeholderComponent, id: `placeholder-${components.length}` });
  }

  return components;
});


  return (
    <div className="product-page-container">
        <img src={productDetails.image} alt={productDetails.name} className="product-image" />
        <div className="product-container">
          <div className="product-info">
          <h1 className="product-title">{productDetails.name}</h1>
          <p className="product-price">{productDetails.price}</p>
          </div>
          <div className="details-specs">
          <p className="details">➤ {productDetails.details}</p>
          <p className="details-text"></p>
          <p className="specifications">➤ {productDetails.specifications}</p>
          <p className="specs-text"></p>
      </div>
        </div>

      {/* Compatible Components Section */}
      <div className="compatible-section">
        <h2 className="compatible-title">Compatible With</h2>
        <div className="compatible-container">
        {compatibleComponents.slice(0, 6).map((component, index) => (
              <div 
                key={component.id} 
                className="compatible-item"
                onClick={() => navigate(`/product/${component.id}`, { 
                  state: { 
                    productName: component.name,
                    productPrice: component.price,
                    productImage: component.image,
                    previousCategory: previousCategory // ✅ Store selected category
                  } 
                })}
                style={{ cursor: "pointer" }} // Make it look clickable
              >
                <img src={component.image} alt={component.name} className="compatible-image" />
                <p className="compatible-name">{component.name}</p>
                <p className="compatible-price">{component.price}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Bottom Section */}
    <div className="bottom-section">
      <div className="stats-icon">
        <img src={Stats} alt="Statistics Icon" />
        <p>STATISTICS</p>
      </div>
      <div className="process-container">
      <div className="quantity-selector">
      <button className="decrease" onClick={handleDecrease}>-</button>
      <div className="quantity">{quantity}</div>
      <button className="increase" onClick={handleIncrease}>+</button>
      </div>
      <div className="action-buttons">
            {/* Cancel button navigates back to PC-Parts with the previous category selected */}
            <button className="cancel-item" onClick={() => navigate("/pc-customized", { state: { selectedCategory: previousCategory } })}>
              Cancel Item
            </button>
            <button className="add-to-order" onClick={addToCart}>Add to Order</button>
          </div>
      </div>
    </div>
    </div>
  );
}

export default ProductPage;