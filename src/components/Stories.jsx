import React from 'react'
import { Container, Row, Col,  Button, Card } from 'react-bootstrap';
import satellite from '../assets/images/satellite.jpeg'
import CallToAction from './CallToAction';
import Footer from './Footer';
import NavigationBar from './NavigationBar';


const Stories = () => {
  return (
    <>
    <NavigationBar />
    <Container>
                <Row className="stories" id='stories' >
                    <Container style={{ marginTop: '10em' }} className='mb-4  d-flex flex-column justify-content-center align-items-center' fluid >
                        
                        <p style={{ fontSize: '2em' }}>From small-holder farmers to multinationals and even governments, carbonflo helps assess above ground biomass, carbon footprints and crop analytics across the world.</p>
                        
                        
                    </Container>

                    <Col lg={4} sm={12} >
                        <Card className='mb-4' style={{ maxWidth: '30rem' }}>

                            <Card.Body >
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

                        <Card className='mb-4' style={{ maxWidth: '30rem' }}>

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
                        <Card className='mb-4' style={{ maxWidth: '30rem' }}>

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
                        <Card className='mb-4' style={{ maxWidth: '30rem' }}>

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
                        <Card className='mb-4' style={{ maxWidth: '30rem', }}>

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
<CallToAction />
<Footer />
</>
  )
}

export default Stories