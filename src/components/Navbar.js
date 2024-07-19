    import React from 'react';
    import './Navbar.css';
    import { FaHome, FaCar, FaCalendarAlt, FaUser } from 'react-icons/fa';

    const Navbar = () => {
    return (
        <nav className="navbar">
        <a href="#home" className="navbar-icon">
            <FaHome />
            <span>Home</span>
        </a>
        <a href="#ride" className="navbar-icon">
            <FaCar /> {/* Updated icon */}
            <span>Ride</span>
        </a>
        <a href="#activity" className="navbar-icon">
            <FaCalendarAlt />
            <span>Activity</span>
        </a>
        <a href="#profile" className="navbar-icon">
            <FaUser />
            <span>Profile</span>
        </a>
        </nav>
    );
    };

    export default Navbar;
