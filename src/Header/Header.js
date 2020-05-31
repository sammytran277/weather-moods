import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "./logo.svg";

const Header = () => {
  return (
    <Navbar className="custom-header" expand="lg">
      <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>
        <img src={logo} alt="Weather Moods logo" width="40" height="40"></img>
        <Navbar.Text className="text-white ml-3">Weather Moods</Navbar.Text>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="text-white" href={process.env.PUBLIC_URL + "/"}>Home</Nav.Link>
          <Nav.Link className="text-white" href={process.env.PUBLIC_URL + "/about"}>About</Nav.Link>
          <Nav.Link className="text-white" href={process.env.PUBLIC_URL + "/contact"}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;