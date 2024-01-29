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
  const navigate = useNavigate()

  const handleOpenGmail = () => {
    window.location.href = 'mailto:info@carbonflo.earth'; // Replace 'your.email@gmail.com' with the desired email address
  };

  return (
    <Navbar bg="black" expand="lg" variant="dark" style={{ opacity: 0.8, position: 'fixed', width: '100%', zIndex: 100 }}>
      <Container>
        <Navbar.Brand href="#home" style={{ marginRight: '20em', paddingBottom:0 }}>
        
          <Image
           src={logo} 
            alt="Logo"
            fluid
            style={{maxHeight:'7em', height:'8em'}}
            // className="d-inline-block align-top"
             />
        </Navbar.Brand  >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  style={NavLinkStyle} href="/">Explore</Nav.Link>
            <Nav.Link  style={NavLinkStyle} href="#stories">Stories</Nav.Link>
            
            <Link style={{textDecoration:'none', color:'#fff', marginTop:'1vh', marginLeft:'.3vw'}} to={'/careers'}>Careers</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Link onClick={handleOpenGmail} style={{textDecoration:'none', color:'#fff', marginTop:'1.2vh', marginRight:'2vw'}} >Talk to Us</Link>
            <Button 
            variant="outline-light"
            onClick={() => navigate('/comingsoon')}
            >Try Carbon-flo</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
