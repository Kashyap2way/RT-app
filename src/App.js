import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Logo from './components/RTLogo';
import RidePage from './components/RidePage';
import ImageSlider from './components/ImageSlider'; // Import the ImageSlider component
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      {currentPage === 'home' && (
        <>
          <header className="header">
            <Logo />
            <SearchBar setCurrentPage={setCurrentPage} />
          </header>
          <ImageSlider scale={0.8} position="center" /> {/* Example scaling and positioning */}
        </>
      )}
      {currentPage === 'ride' && <RidePage />}
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
