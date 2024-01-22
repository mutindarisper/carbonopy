import React, {useEffect, useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlideshow.css'; // Import your custom CSS for the ripple effect
import satellite from "../assets/images/satellite.jpeg"
import aerial from '../assets/images/aerial.jpg'
import stars from '../assets/images/stars.jpg'
import ai from '../assets/images/aieo.jpg'
import ai_ from '../assets/images/ai_.jpg'

import unccd from '../assets/logos/unccd_.png'
import gok from '../assets/logos/gok.svg'

import { Carousel, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import "https://cdn.jsdelivr.net/npm/ripples@0.9.1/dist/ripples.min.css";



const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Increase the speed value to slow down the slideshow
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the autoplay speed as needed
    centerMode: true, // Enable center mode
    centerPadding: '0', // Set center padding to 0 to eliminate side padding
  };
  const logos = [unccd, gok]

  const logoStyle = {
    maxWidth: '16em',
    maxHeight: '3em',
};

const Header = () => {
  // useEffect(() => {
  //   $('.background').ripples({
  //     resolution: 256,
  //     dropRadius: 20,
  //     perturbance: 0.04,
  //   });

  //   // Clean up the ripples when the component unmounts
  //   return () => {
  //     $('.background').ripples('destroy');
  //   };
  // }, []);
  
  return (
    // <Slider {...settings}>
    //   <div className="slide">
    //     <img src={satellite} alt="satellite" />
    //   </div>
    //   <div className="slide">
    //     <img src={stars} alt="space" />
    //   </div>

    //   <div className="slide">
    //     <img src={aerial} alt="aerial" />
    //   </div>
     
    // </Slider>

<>

<Carousel controls={false} indicators={false} className='carousel-fade' id="jumboCarousel" >

<Carousel.Item className='item'>
  <img  src={satellite} alt="Slide 1" class="d-flex flex-column justify-content-center align-items-center h-100"/>
  <Carousel.Caption style={{}} className="custom-caption">
          {/* <h2>Carbon-flo provides access to state-of-the-art AI models empowering users with biodiversity intelligence and insights </h2> */}
          <Row className="justify-content-between">
                {logos.map((logo, index) => (
                    <Col key={index} xs={6} md={3} lg={2} className="mb-4">
                        <Image src={logo} alt={`Logo ${index + 1}`} style={logoStyle} fluid />
                    </Col>
                ))}
            </Row>

        
        </Carousel.Caption>
</Carousel.Item>



<Carousel.Item>
  <img  src={ai_} alt="Slide 2" class="d-flex flex-column justify-content-center align-items-center h-100" />
  <Carousel.Caption style={{}} className="custom-caption">
          <h2>Carbon-flo provides access to state-of-the-art AI models empowering users with biodiversity intelligence and insights </h2>
          {/* <p>Using Earth Observation</p> */}
        </Carousel.Caption>
</Carousel.Item>


<Carousel.Item>
  <img  src={ai} alt="Slide 2" class="d-flex flex-column justify-content-center align-items-center h-100" />
  <Carousel.Caption style={{}} className="custom-caption">
          <h2>Carbon-flo provides access to state-of-the-art AI models empowering users with biodiversity intelligence and insights </h2>
          {/* <p></p> */}
        </Carousel.Caption>
</Carousel.Item>



</Carousel>


</>


  )
}

export default Header