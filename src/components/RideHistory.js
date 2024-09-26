import React, { useState, useEffect } from 'react';
import './RideHistory.css';

const RideHistory = ({ name }) => {
const [rideHistory, setRideHistory] = useState([]);

useEffect(() => {
    const fetchRideHistory = async () => {
    try {
        const response = await fetch(`https://backend2-aurb.onrender.com/api/ridehistory/${name}`);
        const data = await response.json();
        setRideHistory(data);
    } catch (error) {
        console.error('Error fetching ride history:', error);
    }
    };

    if (name) {
    fetchRideHistory();
    }
}, [name]);

return (
    <div className="ride-history-container">
    <h2 className="ride-history-title">Activity</h2> {/* Title above ride history */}

    {rideHistory.length === 0 ? (
        <p>No ride history available.</p>
    ) : (
        <div className="ride-history-list">
        {rideHistory.map((ride, index) => (
            <div key={index} className="ride-history-box">
            <p><strong>Pickup:</strong> {ride.pickup}</p>
            <p><strong>Destination:</strong> {ride.destination}</p>
            <p><strong>Date & Time:</strong> {ride.dateTime}</p>
            </div>
        ))}
        </div>
    )}
    </div>
);
};

export default RideHistory;
