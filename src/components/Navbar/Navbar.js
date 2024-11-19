import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" className="shadow-lg custom-navbar">
      <Container>

        <Navbar.Collapse id="navbar-nav" className="navbar-content">
          <Nav className="nav-links">
            <Nav.Item>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Button variant="outline-primary" as={Link} to="/login" className="Navbarlogin-button">
            Log In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
