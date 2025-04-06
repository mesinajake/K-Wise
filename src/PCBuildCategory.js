import React from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook
import WhiteLogo from "./assets/WhiteLogo.png";
import "./PCBuildCategory.css";

const PCBuildCategory = () => {
  const navigate = useNavigate();

  const handleNavigation = (category) => {
    // Navigate to "/pc-build" if CUSTOMIZED is selected
    if (category === "customized") {
      navigate("/pc-customized");
    } else if (category === "prebuilt") {
      navigate("/pcbuild-purpose");
    }
  };

  return (
    <div className="pc-build-container">
      <div className="build-logo">
        <img src={WhiteLogo} alt="Logo" className="logo" />
      </div>

      <h1 className="build-title">Customized or Prebuilt?</h1>

      <div className="build-options">
        <button
          className="build-option"
          onClick={() => handleNavigation("customized")}
        >
          CUSTOMIZED
        </button>

        <button
          className="build-option"
          onClick={() => handleNavigation("prebuilt")}
        >
          PRE-BUILT
        </button>
      </div>
    </div>
  );
};

export default PCBuildCategory;
