import React, { useState } from 'react';
import './RidePage.css';
import { FaSnowflake } from 'react-icons/fa'; // AC icon from react-icons

const Ride = () => {
  const [showDial, setShowDial] = useState(false);
  const [temperature, setTemperature] = useState(24); // Default temperature

  const toggleDial = () => {
    setShowDial(!showDial);
  };

  const handleDialChange = (e) => {
    const angle = e.target.value;
    const newTemperature = Math.floor((angle / 360) * (32 - 16) + 16);
    setTemperature(newTemperature);
  };

  return (
    <div className="ride-container">
      <div className="loading-box">
        <h1>Car Arriving Shortly...</h1>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      <div className="ac-container">
        <FaSnowflake className="ac-icon" onClick={toggleDial} />
        {showDial && (
          <div className="dial-box">
            <input
              type="range"
              min="0"
              max="360"
              className="dial"
              onChange={handleDialChange}
            />
            <div className="temperature-display">{temperature}°C</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ride;
