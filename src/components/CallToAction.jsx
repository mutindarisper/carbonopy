import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlideShow.css'
import satellite from '../assets/images/sat.jpg'
import { Container, Button } from 'react-bootstrap';

const CallToAction = () => {

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

    <Container style={{marginTop:'4em'}} className='  d-flex flex-column justify-content-center align-items-center dimmed-image-container'  fluid > 
                <p style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff', // Text color
          zIndex: 1,
          fontSize:'5em'
        }}>Are you ready to assess <span style={{color:'yellow'}}>{currentText}</span> </p>
                <Button style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff', // Text color
          zIndex: 1,
          marginTop:'12em'
        }} variant="outline-warning">Schedule a demo</Button>
                <img src={satellite} alt="space" className="dimmed-image"></img>
                
                </Container>
  )
}

export default CallToAction