import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ setCurrentPage }) => {
const [activePage, setActivePage] = useState('home'); // Set initial active page to 'home'

const handlePageChange = (page) => {
    setActivePage(page); // Update active page state
    setCurrentPage(page); // Trigger parent component's setCurrentPage function
};

return (
    <nav className="navbar">
    <div
        className={`nav-item ${activePage === 'home' ? 'active' : ''}`}
        onClick={() => handlePageChange('home')}
    >
        <i className="fas fa-home"></i>
        <span>Home</span>
    </div>
    <div
        className={`nav-item ${activePage === 'ride' ? 'active' : ''}`}
        onClick={() => handlePageChange('home')}
    >
        <i className="fas fa-car"></i>
        <span>Ride</span>
    </div>
    <div
        className={`nav-item ${activePage === 'activity' ? 'active' : ''}`}
        onClick={() => handlePageChange('activity')}
    >
        <i className="fas fa-list"></i>
        <span>Activity</span>
    </div>
    <div
        className={`nav-item ${activePage === 'account' ? 'active' : ''}`}
        onClick={() => handlePageChange('account')}
    >
        <i className="fas fa-user"></i>
        <span>Account</span>
    </div>
    </nav>
);
};

export default Navbar;
