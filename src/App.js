import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Logo from './components/RTLogo';
import RidePage from './components/RidePage';
import ImageSlider from './components/ImageSlider';
import UsernameModal from './components/UsernameModal';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrollLocked] = useState(true);
  const [username, setUsername] = useState('');

  React.useEffect(() => {
    if (isScrollLocked) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }
  }, [isScrollLocked]);

  const handleSetUsername = (name) => {
    setUsername(name);
    setCurrentPage('home');
  };

  return (
    <div className="app">
      {!username && <UsernameModal setUsername={handleSetUsername} />}
      <div className="background"></div>
      {currentPage === 'home' && (
        <header className="header">
          <Logo />
          <SearchBar setCurrentPage={setCurrentPage} />
        </header>
      )}
      {currentPage === 'home' && <ImageSlider />}
      {currentPage === 'ride' && <RidePage />}
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
