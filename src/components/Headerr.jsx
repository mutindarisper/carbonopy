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
const Headerr = () => {
  return (

    <>

      <Container fluid className="custom-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-container">
              <h2>Vegetation Analytics</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time information on above ground biomass,
                a pivotal metric for understanding carbon sequestration </p>
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
              <h2>Historical Assessment</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time information on historical assessment of
                forested or vegetated land . </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={biomass} alt="Your Image" className='your-image2' fluid />
          </Col>
        </Row>
      </Container>




      <Container fluid className="custom-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-container">
              <h2>Carbon Insets and Offsets</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time information for Carbon Insets and Offsets. </p>
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
              <h2>Biodiversity Conservation</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time information on Biodiversity Conservation. </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={biomass} alt="Your Image" className='your-image2' fluid />
          </Col>
        </Row>
      </Container>



      <Container fluid className="custom-container">
        <Row>
          <Col xs={12} md={6}>
            <div className="text-container">
              

              <h2>Crop Analytics</h2>

              <p style={{ fontSize: '1.5em' }}>The publicly available, web-based service delivering near real-time information on crop analytics. </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={biomass} alt="Your Image" className='your-image' fluid />
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
                                <Button variant="secondary">View Story</Button>
                            </Card.Body>
                            <Card.Img src={satellite} />
                        </Card>
                    </Col>

                    <Col lg={4} sm={12}>

                        <Card className='mb-4' style={{ maxWidth: '20rem' }}>

                            <Card.Body>
                                <Card.Title>Historical Assessment</Card.Title>
                                <Card.Text>
                                    Historical assessment of forested and vegetated land of their carbon footprints
                                </Card.Text>
                                <Button variant="secondary">View Story</Button>
                            </Card.Body>
                            <Card.Img src={satellite} />
                        </Card>

                    </Col>

                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '20rem' }}>

                            <Card.Body>
                                <Card.Title>Carbon Insets and Offsets</Card.Title>
                                <Card.Text>
                                    Carbon insets and offsets based on traceable vegetation type
                                </Card.Text>
                                <Button variant="secondary">View Story</Button>
                            </Card.Body>
                            <Card.Img src={satellite} />
                        </Card>
                    </Col>


                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '20rem' }}>

                            <Card.Body>
                                <Card.Title>Biodiversity Conservation</Card.Title>
                                <Card.Text>
                                    Biodiversity Conservation of Pressure Index (BCPI)
                                </Card.Text>
                                <Button variant="secondary">View Story</Button>
                            </Card.Body>
                            <Card.Img src={satellite} />
                        </Card>
                    </Col>

                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '20rem', }}>

                            <Card.Body>
                                <Card.Title>Crop Analytics</Card.Title>
                                <Card.Text>
                                    Small holder farmers access to crop analytics intelligence at scale
                                </Card.Text>
                                <Button variant="secondary">View Story</Button>
                            </Card.Body>
                            <Card.Img src={satellite} />
                        </Card>
                    </Col>


                </Row>


            </Container>

    </>




  )
}

export default Headerr