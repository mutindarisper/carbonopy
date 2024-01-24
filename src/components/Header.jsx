import React, {useEffect, useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlideshow.css'; // Import your custom CSS for the ripple effect
import satellite from "../assets/images/sat.jpg"
import aerial from '../assets/images/aerial.jpg'
import stars from '../assets/images/stars.jpg'
import ai from '../assets/images/ml.jpg'
import ai_ from '../assets/images/aii.jpg'

import unccd from '../assets/logos/unccd_.png'
import gok from '../assets/logos/gok.svg'

import { Carousel, Row, Col, Image } from 'react-bootstrap';
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
    maxHeight: '7em',
    marginTop:'5em',
    marginBottom: '-5em',
    backgroundColor: 'transparent',
    
    
};

const Header = () => {
  
  
  return (
   

<>

<Carousel controls={false} indicators={false} className='carousel-fade' id="jumboCarousel" >




<Carousel.Item>
  <img  src={ai_} alt="Slide 2" className="d-flex flex-column justify-content-center align-items-center h-100 flip-horizontal" />
  <Carousel.Caption style={{}} className="custom-caption">
          <p style={{fontSize:'3em'}}> <span style={{color:'#fff', fontWeight:'bolder'}}>Carbon-flo</span>  provides users with AI driven Measuring & Reporting frameworks for nature based solutions using satellite technology. We connect farmers, communities and other stakeholder to accessing climate resielience funds through our carbonFLOW platform. </p>
          {/* <Row className="justify-content-between">
                {logos.map((logo, index) => (
                    <Col key={index} xs={6} md={3} lg={2}  >
                        <Image className='grey-out-logo ' src={logo} alt={`Logo ${index + 1}`} style={logoStyle} fluid />
                    </Col>
                ))}
            </Row> */}
        </Carousel.Caption>
</Carousel.Item>



<Carousel.Item className='item'>
  <img  src={satellite} alt="Slide 1" className="d-flex flex-column justify-content-center align-items-center h-100"/>
  <Carousel.Caption style={{}} className="custom-caption">
           <p style={{fontSize:'3em'}}> <span style={{color:'#fff', fontWeight:'bolder'}}>Carbon-flo</span>  provides users with AI driven Measuring & Reporting frameworks for nature based solutions using satellite technology. We connect farmers, communities and other stakeholder to accessing climate resielience funds through our carbonFLOW platform. </p>
          {/* <Row className="justify-content-between" >
                {logos.map((logo, index) => (
                    <Col key={index} xs={6} md={3} lg={2} >
                        <Image className='grey-out-logo ' src={logo} alt={`Logo ${index + 1}`} style={logoStyle} fluid />
                        
                    </Col>
                ))}
            </Row> */}

        
        </Carousel.Caption>
</Carousel.Item>



<Carousel.Item>
  <img  src={ai} alt="Slide 2" className="d-flex flex-column justify-content-center align-items-center h-100 flip-horizontal" />
  <Carousel.Caption style={{}} className="custom-caption">
           <p style={{fontSize:'3em'}}> <span style={{color:'#fff', fontWeight:'bolder'}}>Carbon-flo</span>  provides users with AI driven Measuring & Reporting frameworks for nature based solutions using satellite technology. We connect farmers, communities and other stakeholder to accessing climate resielience funds through our carbonFLOW platform. </p>
          {/* <Row className="justify-content-between">
                {logos.map((logo, index) => (
                    <Col key={index} xs={6} md={3} lg={2} >
                        <Image className='grey-out-logo ' src={logo} alt={`Logo ${index + 1}`} style={logoStyle} fluid />
                    </Col>
                ))}
            </Row> */}
        </Carousel.Caption>
</Carousel.Item>



</Carousel>


</>


  )
}

export default Header