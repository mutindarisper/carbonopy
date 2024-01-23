import { Container, Row, Col, Image, Stack  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlideShow.css'
import dash from '../assets/images/dash.png'
import tab  from '../assets/images/tab.png'

const Features = () => {
  return (
   <Container>
    <Row className="bg-image-container">
        <Col className="black-bg-opacity" fluid >
        <div className="text-container">
                        <Stack  gap={3}>
                            <p>Natural Resources</p>
                            <h2>Wetland Monitoring</h2>
                            {/* <Button style={customButtonStyle} type='button' variant="warning">Launch Tool</Button> */}
                            <p>The publicly available, web-based service delivering near real-time information for improved wetland monitoring. </p>

                               <p> Designed to provide information on wetland state and extent to assist with flood preparedness, emergency response and relief efforts.</p>

                        </Stack>

                    </div>

        </Col>


        <Col className="black-bg-opacity"  sm={6} fluid >
            <Image src={dash} fluid/>

        </Col>
    </Row>
    <Row className="bg-image-container">
        <Col className="black-bg-opacity" fluid >
        <div className="text-container">
                        <Stack  gap={3}>
                            <p>Natural Resources</p>
                            <h2>Forest Monitoring</h2>
                            {/* <Button style={customButtonStyle} type='button' variant="warning">Launch Tool</Button> */}
                            <p>The publicly available, web-based service delivering near real-time information for improved tropical forest monitoring. </p>

                               <p> Designed to provide information on tropical forests monitoring and assessment.</p>

                        </Stack>

                    </div>

        </Col>


        <Col className="black-bg-opacity"  sm={6} fluid >
            <Image src={tab} fluid style={{maxHeight:'50vh'}}/>

        </Col>
    </Row>


    <Row className="bg-image-container">
        <Col className="black-bg-opacity" fluid >
        <div className="text-container">
                        <Stack gap={3}>
                            <p>Natural Resources</p>
                            <h2>Wetland Monitoring</h2>
                            {/* <Button style={customButtonStyle} type='button' variant="warning">Launch Tool</Button> */}
                            <p>The publicly available, web-based service delivering near real-time information for improved wetland monitoring. </p>

                               <p> Designed to provide information on wetland state and extent to assist with flood preparedness, emergency response and relief efforts.</p>

                        </Stack>

                    </div>

        </Col>


        <Col className="black-bg-opacity" sm={6} fluid >
            <Image src={dash} fluid />

        </Col>
    </Row>
   </Container>
  )
}

export default Features