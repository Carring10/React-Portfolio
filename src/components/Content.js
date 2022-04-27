import React, { useState } from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Content({ currentView, setCurrentView }) {
  if (currentView === 'About Me') {
    return (
      <AboutMe
      currentView={currentView}
      setCurrentView={setCurrentView} />
    );
  }

  if (currentView === 'Portfolio') {
    return (
      <Portfolio 
      currentView={currentView}
      setCurrentView={setCurrentView} />
    )
  }

  if (currentView === 'Resume') {
    return (
      <Resume 
      currentView={currentView}
      setCurrentView={setCurrentView} />
    )
  }

  if (currentView === 'Contact Me') {
    return (
      <ContactMe
      currentView={currentView}
      setCurrentView={setCurrentView} />
    )
  }
};

export default Content;