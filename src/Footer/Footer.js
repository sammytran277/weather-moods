import React from 'react';
import './Footer.css';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Navbar 
      className="custom-footer justify-content-center" 
      expand="lg"
    >
      <Navbar.Text className="text-white">
        Made with <span className="heart">&hearts;</span> by Sammy Tran
        <a 
          href="https://github.com/sammytran277/weather-moods" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="ml-2" icon={faGithub} color="white" />
        </a>
      </Navbar.Text>
    </Navbar>
  );
}

export default Footer;