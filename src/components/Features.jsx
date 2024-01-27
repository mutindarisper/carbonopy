import { Container, Row, Col, Image, Stack, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { Typography } from '@mui/icons-material'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlideShow.css'
import dash from '../assets/images/dash.png'
import biomass from '../assets/images/biomass2.png'
import historical from '../assets/images/historical.png'
import carbon from '../assets/images/offsets.png'
import biodiversity from '../assets/images/biodiversity.png';
import crops from '../assets/images/crops.png'
import tab from '../assets/images/tab.png'
import satellite from '../assets/images/satellite.jpeg'
import stars from '../assets/images/stars.jpg'
const Features = () => {
    return (
        <>
            <Container style={{}} className='d-flex flex-column justify-content-center align-items-center dimmed-image-container' fluid >

                <img src={stars} alt="space" className="dimmed-image"></img>

                <Row  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: '#fff', 
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10em'

                }} >

                    <Col className="" fluid >
                        <div className="text-container">
                            <Stack gap={4} >
                                
                                <h2>Vegetation Analytics</h2>
                          
                                <p style={{ fontSize:'1.5em'}}>The publicly available, web-based service delivering near real-time information on above ground biomass,
                                a pivotal metric for understanding carbon sequestration </p>

                                {/* <p style={{ fontSize:'1.5em'}}>Estimation of above-ground biomass is a pivotal metric for understanding carbon sequestration and overall ecosystem health. </p> */}

                            </Stack>

                        </div>

                    </Col>


                    <Col className="tab-container"  fluid >
                        <Image className='tilted-image'  src={biomass} fluid />

                    </Col>
                </Row>



            </Container>



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
                            <Stack gap={3}>
                                
                                <h2>Historical Assessment</h2>
                          
                                <p style={{ fontSize:'1.5em'}}>The publicly available, web-based service delivering near real-time information on historical assessment of forested or vegetated land . </p>

                                {/* <p style={{ fontSize:'1.5em'}}> Historical assessment of forested or vegetated land is a critical aspect of understanding the long-term dynamics and changes in ecosystems. This process involves examining archival records, historical maps, satellite imagery, and other sources to reconstruct the historical vegetation cover and land use patterns. </p> */}

                            </Stack>

                        </div>

                    </Col>


                    <Col className=""  fluid >
                        <Image src={historical} fluid />

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
                          
                                <p style={{ fontSize:'1.5em'}}>The publicly available, web-based service delivering near real-time information for Carbon Insets and Offsets. </p>

                                {/* <p style={{ fontSize:'1.5em'}}> Both carbon offsets and insets contribute to the broader goal of achieving a net-zero carbon balance. While offsets provide a means to compensate for emissions that are difficult to eliminate completely, insets focus on actively increasing carbon sequestration to enhance the overall carbon balance.</p> */}

                            </Stack>

                        </div>

                    </Col>


                    <Col className=""  fluid >
                        <Image src={carbon} fluid />

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
                          
                                <p style={{ fontSize:'1.5em'}}>The publicly available, web-based service delivering near real-time information on Biodiversity Conservation. </p>

                                {/* <p style={{ fontSize:'1.5em'}}> Addressing climate change is integral to biodiversity conservation. Climate change poses a significant threat to many species and ecosystems. Conservation strategies often include measures to mitigate and adapt to climate change, such as protecting carbon-rich habitats and promoting resilient ecosystems.</p> */}

                            </Stack>

                        </div>

                    </Col>


                    <Col className=""  fluid >
                        <Image src={biodiversity} fluid />

                    </Col>
                </Row>



            </Container>

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
                            <Stack gap={3}>
                                
                                <h2>Crop Analytics</h2>
                          
                                <p style={{ fontSize:'1.5em'}}>The publicly available, web-based service delivering near real-time information on crop analytics. </p>

                                {/* <p style={{ fontSize:'1.5em'}}> Crop analytics platform that incorporates a decision support system that helps small-holder farmers make informed choices regarding planting, harvesting, and other critical activities. These systems can provide recommendations based on historical data, current conditions, and predictive models.</p> */}

                            </Stack>

                        </div>

                    </Col>


                    <Col className=""  fluid >
                        <Image src={crops} fluid />

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

export default Features