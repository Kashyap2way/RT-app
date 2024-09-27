import React, { useEffect, useState } from 'react';
import './ActivityPage.css';

const ActivityPage = ({ name }) => {
  const [rideHistory, setRideHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRideHistory = async () => {
      try {
        const response = await fetch(`https://backend2-aurb.onrender.com/api/ridehistory/${name}`);
        console.log('API Response:', response); // Log API response status

        if (!response.ok) {
          throw new Error('Failed to fetch ride history');
        }

        const data = await response.json();
        console.log('Ride History Data:', data); // Log fetched data

        setRideHistory(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching data:', error);
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
    <div className="activity-page">
      <h3>{name}'s Ride Activity</h3>
      <ul>
        {rideHistory.map((ride, index) => (
          <li className="ride-history-item" key={index}>
            <p>Pickup: {ride.pickup}</p>
            <p>Destination: {ride.destination}</p>
            <p>Date: {ride.dateTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityPage;
