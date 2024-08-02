import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Logo from './components/RTLogo';
import RidePage from './components/RidePage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app">
      {currentPage === 'home' && (
        <header className="header">
          <Logo />
          <SearchBar setCurrentPage={setCurrentPage} />
        </header>
      )}
      {currentPage === 'ride' && <RidePage />}
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
