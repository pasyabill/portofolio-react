import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#7E60BF',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <LinkContainer to="/">
        <Navbar.Brand
          style={{
            fontFamily: "'Mulish', sans-serif",
            color: '#E4B1F0',
            fontWeight: 'bold',
            fontSize: '1.8rem',
          }}
        >
          Pasya's Portfolio 2024🌸💜
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#E4B1F0' }} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={{ marginLeft: 'auto' }}>
          <LinkContainer to="/">
            <Nav.Link
              className="nav-link"
              style={{
                fontFamily: "'Mulish', sans-serif",
                color: '#E4B1F0',
                fontWeight: '500',
                fontSize: '1.2rem',
              }}
            >
              Home
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link
              className="nav-link"
              style={{
                fontFamily: "'Mulish', sans-serif",
                color: '#E4B1F0',
                fontWeight: '500',
                fontSize: '1.2rem',
              }}
            >
              About
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/project">
            <Nav.Link
              className="nav-link"
              style={{
                fontFamily: "'Mulish', sans-serif",
                color: '#E4B1F0',
                fontWeight: '500',
                fontSize: '1.2rem',
              }}
            >
              Projects
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link
              className="nav-link"
              style={{
                fontFamily: "'Mulish', sans-serif",
                color: '#E4B1F0',
                fontWeight: '500',
                fontSize: '1.2rem',
              }}
            >
              Contact
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;