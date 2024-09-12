import React from 'react';
import './RidePage.css';

const Ride = () => {
  return (
    <div className="ride-container">
      <div className="loading-box">
        <h1>Car Arriving Shortly...</h1>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default Ride;
