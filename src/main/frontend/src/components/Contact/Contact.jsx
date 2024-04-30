import React from "react";
import '../../Variables.css'
import './Contact.css'
import circuitBoard from '../../assets/bg.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div className="contact-container-wrapper">
    <img src={circuitBoard} className="contact-top-container"/>
    <div className="contact-container">
        <h2>Contact Us</h2>
        <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
    </div>
    <div className="contact-bottom-container"></div>
    </div>
  );
};

export default Contact;