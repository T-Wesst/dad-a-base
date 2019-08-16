import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Header(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>{props.message}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/logout">Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
