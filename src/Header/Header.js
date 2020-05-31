import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
          <Nav.Link href={process.env.PUBLIC_URL + "/about"}>About</Nav.Link>
          <Nav.Link href={process.env.PUBLIC_URL + "/contact"}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;