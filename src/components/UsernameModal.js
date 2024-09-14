import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the check icon
import './UsernameModal.css';

const UsernameModal = ({ setUsername }) => {
const [name, setName] = useState('');

const handleChange = (event) => {
    setName(event.target.value);
};

const handleSubmit = () => {
    if (name.trim()) {
    setUsername(name);
    }
};

const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
    handleSubmit();
    }
};

return (
    <div className="username-modal-overlay">
    <div className="username-modal-box">
        <input
        type="text"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="May I know your name..."
        />
    </div>
    </div>
);
};

export default UsernameModal;
