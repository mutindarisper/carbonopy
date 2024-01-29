import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Image, Stack, Button, Card } from 'react-bootstrap';
import './Headerr.css'; // Import your CSS file for styling
import biomass from '../assets/images/biomass2.png'
import historical from '../assets/images/historical.png'
import carbon from '../assets/images/offsets.png'
import biodiversity from '../assets/images/biodiversity.png';
import crops from '../assets/images/crops.png'
import satellite from '../assets/images/satellite.jpeg'
import stars from '../assets/images/stars.jpg'

import canopy from '../assets/images/canopy.jpg'
import bio from '../assets/images/biodiversity_con.jpg'
import crop from '../assets/images/crop.jpg'
import footprint from '../assets/images/footprint.jpg'
import offset from '../assets/images/offset.jpg'
import anga from '../assets/images/anga.png'

const Headerr = () => {
  const navigate = useNavigate()
  return (

    <>

      <Container fluid className="custom-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-container">
              <h2>Vegetation Analytics</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time 
              information on above ground biomass. Estimation of above-ground biomass is a pivotal metric for understanding carbon sequestration and overall ecosystem health. </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={biomass} alt="Your Image" className='your-image' fluid />
          </Col>
        </Row>
      </Container>


      <Container fluid className="custom2-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-container">
              

              <h2>Crop Analytics</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time information on 
              crop analytics. Crop analytics platform that incorporates a decision support system that helps small-holder farmers make informed choices regarding planting, harvesting, and other critical activities. These systems can provide recommendations based on historical data, current conditions, and predictive models. </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={crops} alt="Your Image" className='your-image2' fluid />
          </Col>
        </Row>
      </Container>



      <Container fluid className="custom-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-container">
              <h2>Carbon Insets and Offsets</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time 
              information for Carbon Insets and Offsets. Both carbon offsets and insets contribute to the broader goal of achieving a net-zero carbon balance. While offsets provide a means to compensate for emissions that are difficult to eliminate completely, insets focus on actively increasing carbon sequestration to enhance the overall carbon balance. </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={carbon} alt="Your Image" className='your-image' fluid />
          </Col>
        </Row>
      </Container>



      <Container fluid className="custom2-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-container">
              <h2>Biodiversity Conservation</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time information 
              on Biodiversity Conservation.Addressing climate change is integral to biodiversity conservation. Climate change poses a significant threat to many species and ecosystems. Conservation strategies often include measures to mitigate and adapt to climate change, such as protecting carbon-rich habitats and promoting resilient ecosystems. </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={biodiversity} alt="Your Image" className='your-image2' fluid />
          </Col>
        </Row>
      </Container>



      <Container fluid className="custom-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-container">
              

              <h2>Development of Geospatial Applictions</h2>

              <p style={{ fontSize: '1.5em' }}>Our team of skilled developers, designers, and geospatial experts collaborates closely to develop state-of-the-art geospatial web applications tailored to the unique needs of our clients.
               Whether it's mapping and visualization tools, asset tracking systems, or spatial analytics platforms, we leverage the latest technologies and industry best practices to deliver robust and scalable solutions that drive real-world impact. </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={crops} alt="Your Image" className='your-image' fluid />
          </Col>
        </Row>
      </Container>


      
            {/* STORIES */}
            <Container>
                <Row className="stories" id='stories'>
                    <Container style={{ marginTop: '5em' }} className='mb-4  d-flex flex-column justify-content-center align-items-center' fluid >
                        <h4 >Stories</h4>
                        <p style={{ fontSize: '2em' }}>From small-holder farmers to multinationals and even governments, Carbon-flo helps assess above ground biomass, carbon footprints and crop analytics across the world.</p>
                        
                        <Link to={'/stories'}>
                        <Button variant="outline-secondary">View Our Stories</Button>
                        </Link>
                    </Container>

                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '20rem' }}>

                            <Card.Body>
                                <Card.Title>Vegetation Analytics</Card.Title>
                                <Card.Text>
                                    Above ground biomass of plantations
                                </Card.Text>
                                <Button variant="secondary" onClick={() => navigate('/email')} >Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={canopy} />
                        </Card>
                    </Col>

                    <Col lg={4} sm={12}>

                        <Card className='mb-4' style={{ maxWidth: '20rem' }}>

                            <Card.Body>
                                <Card.Title>Historical Assessment</Card.Title>
                                <Card.Text>
                                    Historical assessment of forested and vegetated land of their carbon footprints
                                </Card.Text>
                                <Button variant="secondary" onClick={() => navigate('/email')}>Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={footprint} />
                        </Card>

                    </Col>

                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '20rem' }}>

                            <Card.Body>
                                <Card.Title>Carbon Insets and Offsets</Card.Title>
                                <Card.Text>
                                    Carbon insets and offsets based on traceable vegetation type
                                </Card.Text>
                                <Button variant="secondary" onClick={() => navigate('/email')}>Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={offset} />
                        </Card>
                    </Col>


                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '20rem' }}>

                            <Card.Body>
                                <Card.Title>Biodiversity Conservation</Card.Title>
                                <Card.Text>
                                    Biodiversity Conservation of Pressure Index (BCPI)
                                </Card.Text>
                                <Button variant="secondary" onClick={() => navigate('/email')}>Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={bio} />
                        </Card>
                    </Col>

                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '20rem', }}>

                            <Card.Body>
                                <Card.Title>Crop Analytics</Card.Title>
                                <Card.Text>
                                    Small holder farmers access to crop analytics intelligence at scale
                                </Card.Text>
                                <Button variant="secondary" onClick={() => navigate('/email')}>Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={crop} />
                        </Card>
                    </Col>

                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '20rem', }}>

                            <Card.Body>
                                <Card.Title>Geospatial Applictions</Card.Title>
                                <Card.Text>
                                Our team of skilled developers, designers, and geospatial experts collaborates closely to develop state-of-the-art geospatial web applications tailored to the unique needs of our clients.
                                </Card.Text>
                                <Button variant="secondary" onClick={() => navigate('/email')}>Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={anga} />
                        </Card>
                    </Col>


                </Row>


            </Container>

    </>




  )
}

export default Headerr