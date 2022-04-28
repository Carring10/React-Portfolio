import React, { useState } from 'react';
import gitHubIcon from '../../images/git-hub.png'
import './Project.css';


function Project({ name, githubLink, img, appLink }) {
  return (

    <div className='project-list-item'>
      <a
        href={appLink}
        target="_blank"
        rel="noreferrer"
        className='text-box'
      >
        <h3>{name}</h3>
      </a>
      <img
        src={img}
        alt={name}
        className="img"
      />
      <a
        href={githubLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={gitHubIcon}
          alt={name}
          className="github-icon"
        />
      </a>
    </div>
  )
}

export default Project;