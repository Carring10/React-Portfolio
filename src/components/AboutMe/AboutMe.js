import React, { useState } from 'react';
import placeholder from'../../images/profile-placeholder.png'
import './AboutMe.css'

function AboutMe({ currentView, setCurrentView }) {
  return (
    <>
      <h1>{currentView}</h1>
      <img
        src={placeholder}
        alt="a placeholder of me"
      />
      <p>An aspiring web developer currently attending UNCC's fullstack bootcamp</p>
    </>
  )
}

export default AboutMe;