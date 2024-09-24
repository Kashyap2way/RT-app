import React, { useEffect, useState } from 'react';
import './RideHistory.css';

const RideHistory = ({ name }) => {
const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchRideHistory = async () => {
    try {
        const response = await fetch(`https://backend2-aurb.onrender.com/api/ridehistory/${name}`);
        const data = await response.json();
        setHistory(data);
        setLoading(false);
    } catch (error) {
        console.error('Error fetching ride history:', error);
        setLoading(false);
    }
    };

    if (name) {
    fetchRideHistory();
    }
}, [name]);

return (
    <div className="ride-history-container">
    <h2 className="ride-history-heading">Ride History for {name}</h2>
    {loading ? (
        <p>Loading history...</p>
    ) : history.length > 0 ? (
        <ul className="ride-history-list">
        {history.map((ride, index) => (
            <li key={index} className="ride-history-item">
            <p><strong>Pickup:</strong> {ride.pickup}</p>
            <p><strong>Destination:</strong> {ride.destination}</p>
            <p><strong>Date & Time:</strong> {ride.dateTime}</p>
            </li>
        ))}
        </ul>
    ) : (
        <p>No ride history available.</p>
    )}
    </div>
);
};

export default RideHistory;
