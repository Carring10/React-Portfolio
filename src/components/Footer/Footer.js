import React, { useState } from 'react';
import gitHubIcon from '../../images/git-hub.png'
import stackOverflowIcon from '../../images/logo-stackoverflow.png'
import linkedin from '../../images/linkedin.png'
import './Footer.css';

function Footer() {
  return (
      <footer>
          <a
            href="https://github.com/Carring10/"
            target="_blank"
            rel="noreferrer"
          >
          <img
            src={gitHubIcon}
            alt="Git Hub Icon"
            className="github-icon"
          />
          </a>
          <a
            href="https://stackoverflow.com/users/17987966/carrington"
            target="_blank"
            rel="noreferrer"
          >
          <img
            src={stackOverflowIcon}
            alt="Stackoverflow Icon"
            className="stackoverflow-icon"
          />
          </a>
          <a
            href="https://www.linkedin.com/in/carrington-hartis-9971381b7/"
            target="_blank"
            rel="noreferrer"
          >
          <img
            src={linkedin}
            alt="linkedin icon"
            className="linkedin-icon"
          />
          </a>
      </footer>
  )
}

export default Footer;