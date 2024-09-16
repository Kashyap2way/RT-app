import React, { useState } from 'react';
import './UsernameModal.css';

const UsernameModal = ({ setCurrentPage, setName }) => {  // Add setName prop
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setName(inputName); // Set the name in the parent state
      setCurrentPage('home'); // Change to home page
    }
  };

  return (
    <div className="username-modal-overlay">
      <div className="username-modal-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="May I know your name..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default UsernameModal;
