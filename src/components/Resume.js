import React, { useState } from 'react';

function Resume({ currentView, setCurrentView }) {
  return (
    <>
    <h1>{currentView}</h1>
    <p>Proficiencies:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>Node</li>
      <li>Express</li>
    </ul>
  </>
  )
}

export default Resume;