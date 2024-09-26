import React, { useEffect, useState } from 'react';
import './RideHistory.css';

const RideHistory = ({ name }) => {
const [rideHistory, setRideHistory] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchRideHistory = async () => {
    try {
        const response = await fetch(`https://backend2-aurb.onrender.com/api/ridehistory/${name}`);
        if (!response.ok) {
        throw new Error('Failed to fetch ride history');
        }
        const data = await response.json();
        setRideHistory(data);
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
    };

    if (name) {
    fetchRideHistory();
    }
}, [name]);

if (loading) {
    return <p>Loading ride history...</p>;
}

if (error) {
    return <p>Error: {error}</p>;
}

if (rideHistory.length === 0) {
    return <p>No rides found for {name}.</p>;
}

return (
    <div className="ride-history">
    <h3>{name}'s Ride History</h3>
    <ul>
        {rideHistory.map((ride, index) => (
        <li key={index}>
            <p>Pickup: {ride.pickup}</p>
            <p>Destination: {ride.destination}</p>
            <p>Date: {ride.dateTime}</p>
        </li>
        ))}
    </ul>
    </div>
);
};

export default RideHistory;
