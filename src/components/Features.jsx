import { Container, Row, Col, Image, Stack, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlideShow.css'
import dash from '../assets/images/dash.png'
import tab from '../assets/images/tab.png'
import satellite from '../assets/images/satellite.jpeg'
import stars from '../assets/images/stars.jpg'
const Features = () => {
    return (
        <>
            <Container style={{}} className='d-flex flex-column justify-content-center align-items-center dimmed-image-container' fluid >

                <img src={stars} alt="space" className="dimmed-image"></img>

                <Row style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff', // Text color
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10em'

                }} >
                    <Col className="" fluid >
                        <div className="text-container">
                            <Stack gap={4} style={{}}>
                                
                                <h2>Vegetation Analytics</h2>
                                {/* <Button style={customButtonStyle} type='button' variant="warning">Launch Tool</Button> */}
                                <p>The publicly available, web-based service delivering near real-time information for improved wetland monitoring. </p>

                                <p> Designed to provide information on wetland state and extent to assist with flood preparedness, emergency response and relief efforts.</p>

                            </Stack>

                        </div>

                    </Col>


                    <Col className="" sm={6} fluid >
                        <Image src={dash} fluid />

                    </Col>
                </Row>



            </Container>



            <Container style={{}} className='  d-flex flex-column justify-content-center align-items-center dimmed-image-container' fluid >

                <img src={stars} alt="space" className="dimmed-image"></img>

                <Row style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff', // Text color
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10em'

                }} >
                    <Col className="" fluid >
                        <div className="text-container">
                            <Stack gap={3}>
                                
                                <h2>Historical Assessment</h2>
                                {/* <Button style={customButtonStyle} type='button' variant="warning">Launch Tool</Button> */}
                                <p>The publicly available, web-based service delivering near real-time information for improved wetland monitoring. </p>

                                <p> Designed to provide information on wetland state and extent to assist with flood preparedness, emergency response and relief efforts.</p>

                            </Stack>

                        </div>

                    </Col>


                    <Col className="" sm={6} fluid >
                        <Image src={dash} fluid />

                    </Col>
                </Row>



            </Container>



            <Container style={{}} className='  d-flex flex-column justify-content-center align-items-center dimmed-image-container' fluid >

                <img src={stars} alt="space" className="dimmed-image"></img>

                <Row style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff', // Text color
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10em'

                }} >
                    <Col className="" fluid >
                        <div className="text-container">
                            <Stack gap={3}>
                                
                                <h2>Carbon Insets and Offsets</h2>
                                {/* <Button style={customButtonStyle} type='button' variant="warning">Launch Tool</Button> */}
                                <p>The publicly available, web-based service delivering near real-time information for improved wetland monitoring. </p>

                                <p> Designed to provide information on wetland state and extent to assist with flood preparedness, emergency response and relief efforts.</p>

                            </Stack>

                        </div>

                    </Col>


                    <Col className="" sm={6} fluid >
                        <Image src={dash} fluid />

                    </Col>
                </Row>



            </Container>
            <Container style={{}} className='  d-flex flex-column justify-content-center align-items-center dimmed-image-container' fluid >

                <img src={stars} alt="space" className="dimmed-image"></img>

                <Row style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff', // Text color
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10em'

                }} >
                    <Col className="" fluid >
                        <div className="text-container">
                            <Stack gap={3}>
                                
                                <h2>Biodiversity Conservation</h2>
                                {/* <Button style={customButtonStyle} type='button' variant="warning">Launch Tool</Button> */}
                                <p>The publicly available, web-based service delivering near real-time information for improved wetland monitoring. </p>

                                <p> Designed to provide information on wetland state and extent to assist with flood preparedness, emergency response and relief efforts.</p>

                            </Stack>

                        </div>

                    </Col>


                    <Col className="" sm={6} fluid >
                        <Image src={dash} fluid />

                    </Col>
                </Row>



            </Container>

            <Container style={{}} className='  d-flex flex-column justify-content-center align-items-center dimmed-image-container' fluid >

                <img src={stars} alt="space" className="dimmed-image"></img>

                <Row style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff', // Text color
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10em'

                }} >
                    <Col className="" fluid >
                        <div className="text-container">
                            <Stack gap={3}>
                                
                                <h2>Crop Analytics</h2>
                                {/* <Button style={customButtonStyle} type='button' variant="warning">Launch Tool</Button> */}
                                <p>The publicly available, web-based service delivering near real-time information for improved wetland monitoring. </p>

                                <p> Designed to provide information on wetland state and extent to assist with flood preparedness, emergency response and relief efforts.</p>

                            </Stack>

                        </div>

                    </Col>


                    <Col className="" sm={6} fluid >
                        <Image src={dash} fluid />

                    </Col>
                </Row>



            </Container>




            {/* STORIES */}
            <Container>
                <Row className="stories">
                    <Container style={{ marginTop: '5em' }} className='mb-4  d-flex flex-column justify-content-center align-items-center' fluid >
                        <h4 >Stories</h4>
                        <p style={{ fontSize: '2em' }}>From small-holder farmers to multinationals and even governments, Carbon-flo helps assess above ground biomass, carbon footprints and crop analytics across the world.</p>
                        <Button variant="outline-secondary">View Our Stories</Button>
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

export default Features