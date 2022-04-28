import React, { useState } from 'react';
import gitHubIcon from '../../images/git-hub.png'
import techBlog from '../../images/tech-blog.png';
import dayPlanner from '../../images/Day-Planner.png';
import './Portfolio.css'

function Portfolio({ currentView, setCurrentView }) {
  return (
    <>
      <h1>{currentView}</h1>
      <p>Applications</p>
      <div className='project-list'>
        <a
          href="https://vast-refuge-27012.herokuapp.com/"
          target="_blank"
          className='project-list-item'
          rel="noreferrer"
        >
          <div className='text-box'>
            <h3>Tech Blog</h3>
          </div>
          </a>
          <img
            src={techBlog}
            alt="Tech Blog"
            className="img"
          />
          <a
            href="https://github.com/Carring10/Tech-Blog"
            target="_blank"
            rel="noreferrer"
          >
          <img
            src={gitHubIcon}
            alt="Git Hub Icon"
            className="github-icon"
          />
          </a>
      </div>

      <div className='project-list'>
        <a
          href="https://vast-refuge-27012.herokuapp.com/"
          target="_blank"
          className='project-list-item'
          rel="noreferrer"
        >
          <div className='text-box'>
            <h3>Day Planner</h3>
          </div>
          <img
            src={dayPlanner}
            alt="Tech Blog"
            className="img"
          />
        </a>
      </div>
    </>
  )
}

export default Portfolio;