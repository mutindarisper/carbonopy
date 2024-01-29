import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col,  Button, Card } from 'react-bootstrap';
import satellite from '../assets/images/satellite.jpeg'
import canopy from '../assets/images/canopy.jpg'
import bio from '../assets/images/biodiversity_con.jpg'
import crop from '../assets/images/crop.jpg'
import footprint from '../assets/images/footprint.jpg'
import offset from '../assets/images/offset.jpg'
import anga from '../assets/images/anga.png'
import CallToAction from './CallToAction';
import Footer from './Footer';
import NavigationBar from './NavigationBar';


const Stories = () => {
    const navigate = useNavigate()
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
                                We deploy our trained models to assess the nature of vegetation in space. With a keen focus of above and below ground biomass and estimate carbon, tree height and canopy percentage. This assists to ascertain vegetation connectivity at scale for your carbon reporting needs.
                                </Card.Text>
                                <Button variant="secondary"  onClick={() => navigate('/email')}>Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={canopy} />
                        </Card>
                    </Col>

                 

                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '30rem' }}>

                            <Card.Body>
                                <Card.Title>Carbon Insets and Offsets</Card.Title>
                                <Card.Text>
                                Using our process-based workflow plus the historical integration of satellite technology, we assist stakeholders in understanding the analytics towards understanding how well they are doing with their net zero target. We leverage historical analytics and ground truth data to inform on your progress. You can trust us with your reporting.
                                </Card.Text>
                                <Button variant="secondary"  onClick={() => navigate('/email')}>Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={offset} style={{height:'25em'}} />
                        </Card>
                    </Col>


                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '30rem' }}>

                            <Card.Body>
                                <Card.Title>Biodiversity Conservation</Card.Title>
                                <Card.Text>
                                The health of our flora and fauna is a key indicator towards understanding the level of conservation relevance for a given ecosystem. Do you want to understand what to do for specific large-scale farms, protected and unprotected areas? Ping us up and we shall assist with all your conservation relevance analytics.
                                </Card.Text>
                                <Button variant="secondary"  onClick={() => navigate('/email')}>Reach Out</Button>
                            </Card.Body>
                            <Card.Img src={bio} />
                        </Card>
                    </Col>

                    <Col lg={4} sm={12}>
                        <Card className='mb-4' style={{ maxWidth: '30rem', }}>

                            <Card.Body>
                                <Card.Title>Crop Analytics</Card.Title>
                                <Card.Text>
                                We look at your farms from an eye birds view, by leveraging on existing earth observations and climate datasets to inform and address the underlying question such as: what is happening with my crops in the field, could I know whether my fertilizer application is working? What is the projection in terms of climate, and do I expect a bumpy harvest at the end of the season. We will answer all this questions for you using AI/ML driven models with a taste of validation.
                                </Card.Text>
                                <Button variant="secondary"  onClick={() => navigate('/email')}>Reach Out</Button>
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
<CallToAction />
<Footer />
</>
  )
}

export default Stories