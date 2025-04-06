import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PurposeOfUse.css";
import WhiteLogo from "./assets/WhiteLogo.png";

const PurposeOfUse = () => {
  const navigate = useNavigate();
  const [selectedPurposes, setSelectedPurposes] = useState([]);

  // Handle checkbox selection
  const handleSelection = (purpose) => {
    setSelectedPurposes((prev) =>
      prev.includes(purpose)
        ? prev.filter((item) => item !== purpose) // Remove if already selected
        : [...prev, purpose] // Add if not selected
    );
  };

// Navigate to PCBuildCategory with selected purposes as query params
const handleNavigation = () => {
  if (selectedPurposes.length === 0) {
    alert("Please select at least one purpose.");
    return;
  }

  // Navigate to PCBuildCategory and pass selected purposes
  navigate(`/priceRange?purposes=${selectedPurposes.join(",").toLowerCase()}`);
};


  // Dynamic background color based on selection
  const getBoxStyle = (purpose) => {
    const colors = {
      Gaming: "#003FE0", // Blue
      Work: "#E0005D", // Pink
      Multimedia: "#E05A00", // Orange
    };
    return {
      backgroundColor: selectedPurposes.includes(purpose)
        ? colors[purpose]
        : "#00E083", // Default green if not selected
    };
  };

  return (
    <div className="purpose-container">
      <div className="logo">
        <img src={WhiteLogo} alt="Logo" className="logo-image" />
      </div>

      <h1 className="purpose-title">Where will you use the PC</h1>
      <p className="subtitle">Select all that counts</p>

      <div className="purpose-options">
        {/* Gaming */}
        <div
          className="purpose-option"
          style={getBoxStyle("Gaming")}
          onClick={() => handleSelection("Gaming")}
        >
          <input
            type="checkbox"
            id="gaming"
            checked={selectedPurposes.includes("Gaming")}
            onChange={() => handleSelection("Gaming")}
          />
          <label htmlFor="gaming">GAMING</label>
        </div>

        {/* Work */}
        <div
          className="purpose-option"
          style={getBoxStyle("Work")}
          onClick={() => handleSelection("Work")}
        >
          <input
            type="checkbox"
            id="work"
            checked={selectedPurposes.includes("Work")}
            onChange={() => handleSelection("Work")}
          />
          <label htmlFor="work">WORK</label>
        </div>

        {/* Multimedia */}
        <div
          className="purpose-option"
          style={getBoxStyle("Multimedia")}
          onClick={() => handleSelection("Multimedia")}
        >
          <input
            type="checkbox"
            id="multimedia"
            checked={selectedPurposes.includes("Multimedia")}
            onChange={() => handleSelection("Multimedia")}
          />
          <label htmlFor="multimedia">MULTIMEDIA</label>
        </div>
      </div>

      <button className="continue-button" onClick={handleNavigation}>
        Continue
      </button>
    </div>
  );
};

export default PurposeOfUse;