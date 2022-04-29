import React, { useState } from 'react';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './Form/ContactMe';
import Portfolio from './Portfolio/Portfolio';
import Resume from './Resume/Resume';

function Content({ currentView, setCurrentView }) {
  return (
    <main style={{
      color: 'white',
      padding: '70px',
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
      minHeight: '100%',
      fontSize: '20px',
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