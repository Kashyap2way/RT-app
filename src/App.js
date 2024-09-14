import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Logo from './components/RTLogo';
import RidePage from './components/RidePage';
import ImageSlider from './components/ImageSlider';
import UsernameModal from './components/UsernameModal';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('username'); // Start with username modal
  const [isScrollLocked] = useState(true);

  React.useEffect(() => {
    if (isScrollLocked) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }
  }, [isScrollLocked]);

  return (
    <div className="app">
      <div className="background"></div> {/* Add the background div */}
      {currentPage === 'username' && <UsernameModal setCurrentPage={setCurrentPage} />}
      {currentPage === 'home' && (
        <>
          <header className="header">
            <Logo />
            <SearchBar setCurrentPage={setCurrentPage} />
          </header>
          <ImageSlider />
        </>
      )}
      {currentPage === 'ride' && <RidePage />}
      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
