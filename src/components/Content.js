import React, { useState } from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Content({ currentView, setCurrentView }) {
  return (
    <main style={{
      color: 'white',
      padding: '25px',
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
    }}>
      {currentView === 'About Me' &&
        <AboutMe
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      }
      {currentView === 'Portfolio' &&
        <Portfolio
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      }
      {currentView === 'Resume' &&
        <Resume
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      }
      {currentView === 'Contact Me' &&
        <ContactMe
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
      }

    </main>
  )
};

export default Content;