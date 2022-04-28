import React, { useState } from 'react';

function AboutMe({ currentView, setCurrentView }) {
  return (
    <>
      <h1>{currentView}</h1>
      {/* <img
        src="https://avatars.dicebear.com/api/female/jane.svg"
        alt="a placeholder of me"
      /> */}
      <p>An aspiring web developer currently attending UNCC's fullstack bootcamp</p>
    </>
  )
}

export default AboutMe;