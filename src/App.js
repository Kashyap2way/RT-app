import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Logo from './components/RTLogo';
import RidePage from './components/RidePage';
import ImageSlider from './components/ImageSlider';
import UsernameModal from './components/UsernameModal';
import RideHistory from './components/RideHistory';
import ActivityPage from './components/ActivityPage';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('username'); // Start with username modal
  const [isScrollLocked] = useState(true);
  const [name, setName] = useState(''); // State to hold the user's name

  useEffect(() => {
    if (isScrollLocked) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }
  }, [isScrollLocked]);

  return (
    <div className="app">
      <div className="background"></div> {/* Add the background div */}
      
      {/* Conditionally render UsernameModal if currentPage is 'username' */}
      {currentPage === 'username' && (
        <UsernameModal 
          setCurrentPage={setCurrentPage} 
          setName={setName} // Pass setName to save the user's name
        />
      )}

      {/* Conditionally render Home page if currentPage is 'home' */}
      {currentPage === 'home' && (
        <>
          <header className="header">
            <Logo />
            <SearchBar 
              setCurrentPage={setCurrentPage} 
              name={name} // Pass name as prop
            />
          </header>
          <ImageSlider />
          <RideHistory name={name} /> {/* Render RideHistory and pass user's name */}
        </>
      )}

      {/* Conditionally render RidePage if currentPage is 'ride' */}
      {currentPage === 'ride' && (
        <RidePage 
          name={name} // Pass name to RidePage
        />
      )}

      {/* Conditionally render ActivityPage if currentPage is 'activity' */}
      {currentPage === 'activity' && (
        <ActivityPage 
          name={name} // Pass name to ActivityPage
        />
      )}

      <Navbar setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
