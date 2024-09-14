import React, { useState } from 'react';
import './UsernameModal.css';

const UsernameModal = ({ setCurrentPage }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setCurrentPage('home'); // Change to home page
    }
  };

  return (
    <div className="username-modal-overlay">
      <div className="username-modal-box">

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="May I know your name..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default UsernameModal;
