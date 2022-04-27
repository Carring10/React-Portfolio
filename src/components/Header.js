import React, { useState } from 'react';
import Nav from './Nav';

function Header({ currentView, setCurrentView }) {
  console.log(currentView)
  return (
    <div>
      <h1>{currentView}</h1>
      <Nav 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
    </div>
  )
}

export default Header;