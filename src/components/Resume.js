import React, { useState } from 'react';

function Resume({ currentView, setCurrentView }) {
  return (
    <div>
    <h1>{currentView}</h1>
    <p>here is my resume</p>
  </div>
  )
}

export default Resume;