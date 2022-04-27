import React, { useState } from 'react';
import Nav from '../Nav';
import './Header.css';

function Header({ currentView, setCurrentView }) {
  return (
    <header>
      <h1>Carrington Hartis</h1>
      <Nav 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </header>
  )
}

export default Header;