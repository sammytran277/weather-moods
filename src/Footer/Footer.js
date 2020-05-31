import React from 'react';
import './Footer.css';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar className="justify-content-center" bg="light" expand="lg" fixed="bottom">
      <Navbar.Text>Made with <span className="heart">&hearts;</span> by Sammy Tran</Navbar.Text>
    </Navbar>
  );
}

export default Footer;