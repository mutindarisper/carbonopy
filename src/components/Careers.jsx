import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image, Stack, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlideShow.css'
import dash from '../assets/images/dash.png'
import tab from '../assets/images/tab.png'
import ceo from '../assets/images/ceo.jpeg'
import stars from '../assets/images/stars.jpg'
import satellite from '../assets/images/sat.jpg'
import tech from '../assets/images/tech.png'
import CallToAction from './CallToAction';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

const Careers = () => {

  const texts = [
    "above ground biomass",
    "carbon footprints",
    "crop analytics",
    // Add more texts as needed
  ];

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change text every 3 seconds (adjust the time as needed)
      const newIndex = (texts.indexOf(currentText) + 1) % texts.length;
      setCurrentText(texts[newIndex]);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentText, texts]);
  return (
    <>
      <NavigationBar />


      <Container className='  d-flex flex-column justify-content-center align-items-center dimmed-image-container' fluid >





        <div className="intro_content">

          <p style={{
            position: 'absolute',
            top: '40%',
            left: '20%',
            transform: 'translate(-50%, -50%)',
            color: '#fff', // Text color
            zIndex: 1,
            fontSize: '5em'
          }}>Meet the Team  </p>


          <p style={{
            position: 'absolute',
            top: '68%',
            left: '23%',
            transform: 'translate(-50%, -50%)',
            color: '#fff', // Text color
            zIndex: 1,
            fontSize: '1.5em',
            width:'25em'
          }}>Our team of skilled developers, designers, and geospatial experts collaborates closely to develop state-of-the-art geospatial web applications tailored to the unique needs of our clients.
          Whether it's mapping and visualization tools, asset tracking systems, or spatial analytics platforms, we leverage the latest technologies and industry best practices to deliver robust and scalable solutions that drive real-world impact. </p>

        </div>




        <Image style={{
          position: 'absolute',
          top: '20%',
          left: '70%',
          transform: 'translate(-50%, -50%)',
          color: '#fff', // Text color
          zIndex: 1,
          marginTop: '20em',
          height: '35em',
          width: '45em',

        }} src={tech} rounded fluid />




        <img src={stars} alt="space" className="dimmed-image"></img>

      </Container>


      <Container className='  d-flex flex-column justify-content-center align-items-center dimmed-image-container' fluid >
        <p style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff', // Text color
          zIndex: 1,
          fontSize: '5em'
        }}>Are you ready to assess <span style={{ color: 'yellow' }}>{currentText}</span> </p>
        <Button style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff', // Text color
          zIndex: 1,
          marginTop: '12em'
        }} variant="outline-warning">Schedule a demo</Button>
        <img src={satellite} alt="space" className="dimmed-image"></img>

      </Container>

      <Footer />

    </>
  )
}

export default Careers