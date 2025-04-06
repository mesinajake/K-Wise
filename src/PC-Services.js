import React from "react";
import "./PC-Parts.css";
import logo1 from "./assets/LOGO1.png";

function PCParts() {
  return (
    <div className="pc-parts-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo1} alt="PC Wise" className="logo" />
        </div>
        <div className="menu">
          {Array.from({ length: 6 }).map((_, index) => (
            <button key={index} className="menu-item"></button>
          ))}
        </div>
        <button className="menu-item1"></button>

      </div>

      {/* Main Content with Scrollbar */}
      <div className="main-content">
        <div className="scroll-container">
          <div className="grid">
            {Array.from({ length: 60 }).map((_, index) => (
              <div key={index} className="grid-item">
                <div className="dot"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Scrollbar */}
        <div className="scrollbar"></div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <button type="submit" className="input-box">ADD TO CART</button>
        <button type="submit" className="input-box">START OVER</button>
      </div>
    </div>
  );
}

export default PCParts;
