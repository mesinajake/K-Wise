import React, { useState, useEffect } from "react";
import "./AssistedService.css";
import Group6 from './assets/Group 6.png'; // Assisted Service Icon

function AssistedService() {
  const [waiting, setWaiting] = useState(true);

  //Function for Assisted Service, waiting a staff for them to assist the buyer.
  useEffect(() => {
    // Simulate assistance after 10 seconds
    const timer = setTimeout(() => {
      setWaiting(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="assisted-service-container">
      <div className="content">
        <img src={Group6} alt="Assisted Service" className="logo" />
        <h2>ASSISTED SERVICE</h2>
      </div>
      <div className="loading">
        <div className="loader"></div>
        <p>{waiting ? "wait for assistance..." : "Assistance is here!"}</p>
      </div>
    </div>
  );
}

export default AssistedService;
