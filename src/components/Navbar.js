import React from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ setCurrentPage }) => {
return (
    <nav className="navbar">
    <div className="nav-item" onClick={() => setCurrentPage('home')}>
        <i className="fas fa-home"></i>
        <span>Home</span>
    </div>
    <div className="nav-item" onClick={() => setCurrentPage('ride')}>
        <i className="fas fa-car"></i>
        <span>Ride</span>
    </div>
    <div className="nav-item" onClick={() => setCurrentPage('activity')}>
        <i className="fas fa-list"></i>
        <span>Activity</span>
    </div>
    <div className="nav-item" onClick={() => setCurrentPage('account')}>
        <i className="fas fa-user"></i>
        <span>Account</span>
    </div>
    </nav>
);
};

export default Navbar;
