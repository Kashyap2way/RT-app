import React, { useState } from 'react';
import './RidePage.css';
import { FaSnowflake } from 'react-icons/fa';

const Ride = () => {
  const [showDial, setShowDial] = useState(false);
  const [temperature, setTemperature] = useState(24); // Default temperature
  const [iconColor, setIconColor] = useState('#ffffff'); // Default icon color

  const toggleDial = () => {
    if (showDial) {
      // Reset color to white when closing the dial
      setIconColor('#ffffff');
    } else {
      // Update color based on temperature when opening the dial
      setIconColor(`rgb(${Math.floor((temperature - 16) * (255 / 16))}, 0, ${255 - Math.floor((temperature - 16) * (255 / 16))})`);
    }
    setShowDial(!showDial);
  };

  const handleDialChange = (e) => {
    const angle = e.target.value;
    const newTemperature = Math.floor((angle / 360) * (32 - 16) + 16);
    setTemperature(newTemperature);
    // Update icon color based on the new temperature
    setIconColor(`rgb(${Math.floor((newTemperature - 16) * (255 / 16))}, 0, ${255 - Math.floor((newTemperature - 16) * (255 / 16))})`);
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
        <div className="ac-background">
          <FaSnowflake
            className="ac-icon"
            style={{ color: iconColor }} // Change color based on temperature or default white
            onClick={toggleDial}
          />
        </div>
        {showDial && (
          <div className="dial-box">
            <input
              type="range"
              min="0"
              max="360"
              className="dial"
              onChange={handleDialChange}
              value={(temperature - 16) * (360 / (32 - 16))} // Set default value for the slider
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Ride;
