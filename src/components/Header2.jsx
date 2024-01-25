import React from 'react'

import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'; // You can create this file for custom styles

const Header2 = () => {
  return (
    <Container fluid>
      <Carousel controls={false} indicators={false} className="custom-carousel">
        <Carousel.Item>
          <div className="carousel-item-content">
            <div className="carousel-image image1"></div>
            <div className="carousel-text">
              <h2>Slide 1</h2>
              <p>This is the first slide</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <div className="carousel-image image2"></div>
            <div className="carousel-text">
              <h2>Slide 2</h2>
              <p>This is the second slide</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-content">
            <div className="carousel-image image3"></div>
            <div className="carousel-text">
              <h2>Slide 3</h2>
              <p>This is the third slide</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
  
}

export default Header2