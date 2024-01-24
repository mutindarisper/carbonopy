import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageSlideShow.css'
import { Container, Button, Row, Col, Image, Stack, InputGroup, Form } from 'react-bootstrap';
import logo from '../assets/logos/logo_white.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Container style={{ backgroundColor: '#000', padding: '3em', color: '#fff' }} fluid>
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

                        <p>©2024 carbonflo.earth. All rights reserved.</p>

                    </Stack>

                </Col>

                <Col lg={4} sm={12} fluid>

                    <Stack gap={4}>
                        <h5>carbonflo</h5>
                        <Link style={{textDecoration:'none', color:'#fff'}} to={'/'}>Explore</Link>
                        <Link style={{textDecoration:'none', color:'#fff'}} to={'/stories'}>Stories</Link>
                        <Link style={{textDecoration:'none', color:'#fff'}} to={'/careers'}>Careers</Link>



                    </Stack>

                </Col>
                <Col  fluid>
                    <Stack gap={4}>
                        <h5>Follow us</h5>
                        <p><LinkedInIcon /> LinkedIn</p>
                        <p><XIcon /> Twitter</p>
                        <p><FacebookIcon /> Facebook</p>



                    </Stack>

                </Col>
            </Row>
        </Container>

    )
}

export default Footer