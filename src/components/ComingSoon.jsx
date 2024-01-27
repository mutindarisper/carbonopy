import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Image, Stack, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import 'bootstrap/dist/css/bootstrap.min.css';

const ComingSoon = () => {
    return (
        <Container fluid style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Typography variant="h1" component="h2">
                Coming Soon
            </Typography>
        </Container>
    )
}

export default ComingSoon