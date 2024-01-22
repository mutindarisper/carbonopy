import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlideshow.css'; // Import your custom CSS for the ripple effect
import satellite from "../assets/images/satellite.jpeg"
import aerial from '../assets/images/aerial.jpg'
import stars from '../assets/images/stars.jpg'
import ai from '../assets/images/aieo.jpg'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



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

const Header = () => {
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
<Carousel controls={false} indicators={false}>
<Carousel.Item >
  <img  src={satellite} alt="Slide 1" />
  <Carousel.Caption style={{}} className="d-flex flex-column align-items-center justify-content-center">
          <h2>With Carbonopy's software, you can monitor Carbon from Vegetation </h2>
          {/* <p></p> */}
        </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img  src={ai} alt="Slide 2" />
  <Carousel.Caption style={{}} className="d-flex flex-column align-items-center justify-content-center">
          <h2>With Carbonopy's software, you can monitor Carbon from Vegetation </h2>
          {/* <p></p> */}
        </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img  src={stars} alt="Slide 2" />
  <Carousel.Caption style={{}} className="d-flex flex-column align-items-center justify-content-center">
          <h2>With Carbonopy's software, you can monitor Carbon from Vegetation </h2>
          {/* <p>Using Earth Observation</p> */}
        </Carousel.Caption>
</Carousel.Item>


</Carousel>


</>


  )
}

export default Header