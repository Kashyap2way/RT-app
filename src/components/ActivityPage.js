import React, { useState, useEffect } from 'react';
import './ActivityPage.css';

const ActivityPage = ({ name }) => {
const [rideHistory, setRideHistory] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchRideHistory = async () => {
    try {
        const response = await fetch(`https://backend2-aurb.onrender.com/api/ridehistory/${name}`);
        const data = await response.json();
        setRideHistory(data);
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

if (loading) {
    return <div className="activity-page">Loading...</div>;
}

return (
    <div className="activity-page">
    <h2>{name}'s Ride History</h2>
    {rideHistory.length === 0 ? (
        <p>No rides found.</p>
    ) : (
        <ul className="ride-history-list">
        {rideHistory.map((ride, index) => (
            <li key={index} className="ride-item">
            <div>
                <strong>Pickup:</strong> {ride.pickup}
            </div>
            <div>
                <strong>Destination:</strong> {ride.destination}
            </div>
            <div>
                <strong>Date:</strong> {ride.dateTime}
            </div>
            </li>
        ))}
        </ul>
    )}
    </div>
);
};

export default ActivityPage;
