import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Transac-components.css";
import CPU1 from "./assets/CPU1.png";
import ITS2 from "./assets/ITS2.png";
import Vector from "./assets/Vector.png";

function Transaction() {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState("CPU1");
  
  //Function to identify if you want to buy for just a components, to build PC, and for services.
  const boxData = {
    CPU1: { image: CPU1, title: "COMPONENTS", subtext: "Browse and purchase individual PC parts", link: "/pc-parts" },
    Vector: { image: Vector, title: "BUILD YOUR PC", subtext: "Create your dream PC with customizable build options", link: "/pcbuild-category" },
    ITS2: { image: ITS2, title: "SERVICES", subtext: "Get expert help with installation, upgrades, diagnostics, repairs, and cleaning services", link: "/pc-services" },
  };

  const handleClick = (boxName) => {
    setSelectedBox(boxName);
  };

  return (
    <div className="background">
      {/* Main Section */}
      <div className="main-box">
        <img src={boxData[selectedBox].image} alt="Selected" className="component" />
        <h2 className="main-title">{boxData[selectedBox].title}</h2>
        <p className="subtext">{boxData[selectedBox].subtext}</p>
        <button className="start-btn" onClick={() => navigate(boxData[selectedBox].link)}>
          GET STARTED
        </button>
      </div>

      {/* Bottom Boxes */}
      <div className="bottom-boxes">
        {Object.keys(boxData).map((boxName) => (
          <div 
            key={boxName} 
            className={`box ${selectedBox === boxName ? "active" : "inactive"}`} 
            onClick={() => handleClick(boxName)}
          >
            <img src={boxData[boxName].image} alt={boxData[boxName].title} className="component" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transaction;
