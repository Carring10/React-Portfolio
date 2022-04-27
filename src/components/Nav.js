import React, { useState } from 'react';

function Nav({ currentView, setCurrentView }) {
  return (
    <div>
      <a href="#about-me" onClick={() => setCurrentView('About Me')}>About Me</a>
      <a href="#portfolio" onClick={() => setCurrentView('Portfolio')}>Portfolio</a>
      <a href="#resume" onClick={() => setCurrentView('Resume')}>Resume</a>
      <a href="#contact-me" onClick={() => setCurrentView('Contact Me')}>Contact Me</a>
    </div>
  )
}

export default Nav;