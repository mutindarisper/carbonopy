import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import logo from '../assets/logos/logo_white.png'
// import './Navbar.css'

const NavLinkStyle = {
  color:'#fff',

}

const NavigationBar = () => {
  return (
    <Navbar bg="black" expand="lg" variant="dark" style={{ opacity: 0.8, position: 'fixed', width: '100%', zIndex: 100 }}>
      <Container>
        <Navbar.Brand href="#home" style={{ marginRight: '20em' }}>
        
          <Image
           src={logo} 
            alt="Logo"
            fluid
            style={{maxHeight:'5em'}}
            // className="d-inline-block align-top"
             />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  style={NavLinkStyle} href="/">Explore</Nav.Link>
            <Nav.Link  style={NavLinkStyle} href="#stories">Stories</Nav.Link>
            
            <Nav.Link  style={NavLinkStyle} href="/careers">Careers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link style={NavLinkStyle} href="#book-demo">Talk to Us </Nav.Link>
            <Button variant="outline-light">Try Carbon-flo</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
