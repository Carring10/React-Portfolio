import React, { useState } from 'react';

function Nav({ currentView, setCurrentView }) {
  return (
    <nav>
      <a
        className={`${currentView === 'About Me' ? 'selected' : ''}`}
        href="#about-me"
        onClick={() => setCurrentView('About Me')}
      >About Me</a>
      <a
        className={`${currentView === 'Portfolio' ? 'selected' : ''}`}
        href="#portfolio"
        onClick={() => setCurrentView('Portfolio')}
      >Portfolio</a>
      <a
        className={`${currentView === 'Resume' ? 'selected' : ''}`}
        href="#resume"
        onClick={() => setCurrentView('Resume')}
      >Resume</a>
      <a
        className={`${currentView === 'Contact Me' ? 'selected' : ''}`}
        href="#contact-me"
        onClick={() => setCurrentView('Contact Me')}
      >Contact Me</a>
    </nav>
  )
}

export default Nav;