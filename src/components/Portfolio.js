import React, { useState } from 'react';

function Portfolio({ currentView, setCurrentView }) {
  return (
    <div>
    <h1>{currentView}</h1>
    <p>Applications</p>
  </div>
  )
}

export default Portfolio;