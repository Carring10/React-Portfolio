import React, { useState } from 'react';
import gitHubIcon from '../../images/git-hub.png'
import './Footer.css';

function Footer() {
  return (
      <footer>
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
      </footer>
  )
}

export default Footer;