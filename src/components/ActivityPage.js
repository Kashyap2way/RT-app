import React, { useEffect, useState } from 'react';
import './ActivityPage.css';

const Activity = ({ name }) => {
const [rideHistory, setRideHistory] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Fetch ride history when component mounts
useEffect(() => {
    const fetchRideHistory = async () => {
    try {
        const response = await fetch(`https://your-render-url.com/api/ridehistory/${name}`);
        if (!response.ok) {
        throw new Error('Failed to fetch ride history');
        }
        const data = await response.json();
        setRideHistory(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

    if (name) {
    fetchRideHistory();
    }
}, [name]);

if (loading) {
    return <div className="activity-loading">Loading ride history...</div>;
}

if (error) {
    return <div className="activity-error">Error: {error}</div>;
}

if (rideHistory.length === 0) {
    return <div className="activity-empty">No ride history available for {name}</div>;
}

return (
    <div className="activity-container">
    <h2>{name}'s Ride History</h2>
    <ul className="ride-history-list">
        {rideHistory.map((ride, index) => (
        <li key={index} className="ride-history-item">
            <p><strong>Pickup:</strong> {ride.pickup}</p>
            <p><strong>Destination:</strong> {ride.destination}</p>
            <p><strong>Date & Time:</strong> {ride.dateTime}</p>
        </li>
        ))}
    </ul>
    </div>
);
};

export default Activity;
