import React from 'react'

import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // You can create this file for custom styles

import unccd from '../assets/logos/unccd2.png'
import gok from '../assets/logos/gok.png'

const Header2 = () => {
  return (
    <Container fluid>
        <p>Our Partners</p>
      <Carousel controls={false} indicators={false} className="custom-carousel">
        <Carousel.Item>
          <div className="carousel-item-content">
            <div className="carousel-image image1"></div>
            <div className="carousel-text">
             <img style={{height:'10em', width:'15em', marginTop:'-5vh' }} src={unccd} alt="" /> 
            </div>
          </div>
        </Carousel.Item>
        
        <Carousel.Item>
          <div className="carousel-item-content">
            <div className="carousel-image image3"></div>
            <div className="carousel-text">
            <img style={{height:'5em', width:'7em'}} src={gok} alt="" />
            </div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </Container>
  );
  
}

export default Header2