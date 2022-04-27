import React, { useState } from 'react';

function AboutMe({ currentView, setCurrentView }) {
  return (
    <div className='about-section'>
    <h1>{currentView}</h1>
    {/* <img
        src="https://avatars.dicebear.com/api/female/jane.svg"
        alt="a placeholder of me"
      /> */}
    <p>Lorem ipsum dolor sit amet</p>
  </div>
  )
}

export default AboutMe;