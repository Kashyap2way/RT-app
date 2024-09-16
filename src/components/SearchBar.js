import React, { useState } from 'react';
import './SearchBar.css';

const staticSuggestions = [
  "Longs",
  "Tunnel",
  "Stairway",
  "Gecko",
  "Terrorist",
];

const SearchBar = ({ setCurrentPage, name }) => {
  const [searchValue, setSearchValue] = useState("");
  const [pickupValue, setPickupValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [showPickupBar, setShowPickupBar] = useState(false);
  const [showRideButton, setShowRideButton] = useState(false);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setSuggestions(getFilteredSuggestions(value));
  };

  const handlePickupChange = (event) => {
    const value = event.target.value;
    setPickupValue(value);
    setPickupSuggestions(getFilteredSuggestions(value));
  };

  const handleSelect = (value, type) => {
    if (type === 'search') {
      setSearchValue(value);
      setSuggestions([]);
      setShowPickupBar(true);
    } else {
      setPickupValue(value);
      setPickupSuggestions([]);
      validateLocations(value, searchValue);
    }
  };

  const getFilteredSuggestions = (value) => {
    return staticSuggestions.filter(place =>
      place.toLowerCase().includes(value.toLowerCase())
    );
  };

  const validateLocations = (pickup, destination) => {
    if (pickup && destination && pickup !== destination) {
      setShowRideButton(true);
    } else {
      setShowRideButton(false);
    }
  };

  const handleRideClick = async () => {
    try {
      const response = await fetch('https://rtbackend.onrender.com/api/rides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickup: pickupValue,
          destination: searchValue,
          name: name
        }),
      });
      
      if (!response.ok) {
        const errorText = await response.text(); // Get the error text
        throw new Error(errorText);
      }

      const data = await response.json(); // Ensure server response is valid JSON
      console.log('Ride saved:', data);
      setCurrentPage('ride');
    } catch (error) {
      console.error('Error saving ride:', error);
    }
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for places..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        {suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSelect(suggestion, 'search')}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      {showPickupBar && (
        <div className="pickup-bar">
          <input
            type="text"
            placeholder="Enter pickup location..."
            value={pickupValue}
            onChange={handlePickupChange}
          />
          {pickupSuggestions.length > 0 && (
            <div className="pickup-suggestions">
              {pickupSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="pickup-suggestion-item"
                  onClick={() => handleSelect(suggestion, 'pickup')}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {showRideButton && (
        <div className="ride-button-container">
          <button className="ride-button" onClick={handleRideClick}>Ride</button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
