import React, { useState } from 'react';
import './RidePage.css';
import { FaSnowflake, FaRegLightbulb, FaPlay, FaStepBackward, FaStepForward } from 'react-icons/fa'; // Import necessary icons

const RidePage = () => {
  const [temperature, setTemperature] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState('#ffffff'); // Default color

  const handleTemperatureChange = (newTemperature) => {
    setTemperature(newTemperature);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    setShowColorPicker(false);
  };

  return (
    <div className="ride-container">
      {/* Loading Box */}
      <div className="loading-box">
        <h1>Car Arriving Shortly...</h1>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      {/* AC Icon and Dial */}
      <div className="ac-container">
        <div className="ac-background">
          <FaSnowflake
            className="ac-icon"
            style={{ color: temperature ? color : '#ffffff' }}
            onClick={() => handleTemperatureChange(temperature === null ? 16 : null)} // Toggle dial visibility
          />
        </div>
        {temperature !== null && (
          <div className="dial-box">
            <div className="dial"></div>
          </div>
        )}
      </div>

      {/* Bulb Icon and Color Picker */}
      <div className="bulb-container">
        <div className="bulb-background">
          <FaRegLightbulb
            className="bulb-icon"
            style={{ color: color }}
            onClick={() => setShowColorPicker(!showColorPicker)} // Toggle color picker visibility
          />
        </div>
        {showColorPicker && (
          <div className="color-picker">
            {['#B09300', '#D13414', '#CC00F5', '#6118F2', '#000000', '#ffffff'].map((col) => (
              <div
                key={col}
                className="color-swatch"
                style={{ backgroundColor: col }}
                onClick={() => handleColorChange(col)}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Music Player Box */}
      <div className="music-player-box">
        <FaStepBackward className="music-icon" /> {/* Previous icon */}
        <FaPlay className="music-icon" />          {/* Play icon */}
        <FaStepForward className="music-icon" />   {/* Next icon */}
      </div>
    </div>
  );
};

export default RidePage;
