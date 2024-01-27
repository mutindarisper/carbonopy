import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';
import Typography from '@mui/material/Typography'

const EmailUs = () => {
    // const recipientEmail = 'seth.nyawacha@carbonflo.earth'
    const [recipientEmail, setRecipientEmail] = useState('seth.nyawacha@carbonflo.earth');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle form submission here
        console.log("Recipient Email:", recipientEmail);
        console.log("Subject:", subject);
        console.log("Message:", message);
        // Example: Send data to backend or handle submission logic
    };

    return (
        <Container style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',height: '100vh', backgroundColor:'#ddd'}} fluid >

        <Container  style={{maxWidth:'50em', padding:'2em', backgroundColor:'#fff', borderRadius:'1.5em'  }} fluid>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="recipientEmail">
                    <Form.Label>Recipient Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter recipient email"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        required
                        className='mb-2'
                    />
                </Form.Group>

                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        className='mb-2'
                    />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className='mb-2'
                    />
                </Form.Group>

                <Button className='my-4' variant="primary" type="submit">
                    Send Email
                </Button>
            </Form>

        </Container>



        </Container>


    )
}

export default EmailUs