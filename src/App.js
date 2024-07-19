import React from 'react';
import Navbar from './components/Navbar';
import Logo from './components/RTLogo';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <div className="content">
        {/* Add any additional content here */}
      </div>
      <Navbar />
    </div>
  );
};

export default App;
