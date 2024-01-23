import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlideShow.css'
import { Container, Button, Row, Col, Image, Stack, InputGroup, Form } from 'react-bootstrap';
import logo from '../assets/logos/flo.png'

const Footer = () => {
    return (
        <Container style={{ backgroundColor: '#2d2c2b', padding: '3em', color: '#fff' }} fluid>
            <Row style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '5em'
            }}>
                <Container>
                    <Image src={logo} fluid className=''
                        style={{ maxHeight: '5em', }} />

                </Container>


                <Col lg={4} sm={12} fluid>
                    <Stack gap={4}>
                        <p>Email us for updates on carbon footprints assessment</p>
                        <InputGroup className="mb-3">

                            <Form.Control style={{maxWidth:'15em'}}
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text id="basic-addon1">Subscribe</InputGroup.Text>
                        </InputGroup>

                        <p>©2024 Carbon-flo.Earth. All rights reserved.</p>

                    </Stack>

                </Col>

                <Col lg={4} sm={12} fluid>
                    <Stack gap={4}>
                        <h5>Carbon-flo</h5>
                        <p>Explore</p>
                        <p>Stories</p>
                        <p>Careers</p>



                    </Stack>

                </Col>
                <Col  fluid>
                    <Stack gap={4}>
                        <h5>Follow us</h5>
                        <p>LinkedIn</p>
                        <p>X</p>
                        <p>Youtube</p>



                    </Stack>

                </Col>
            </Row>
        </Container>

    )
}

export default Footer