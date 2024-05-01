import '../../Variables.css'
import './Contact.css'
import circuitBoard from '../../assets/bg.jpg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  { useState } from 'react';

const Contact = () => {
    const [message, setMessage]=useState({message:'', status:''});
    const [emailData, setEmailData] = useState({ message: '', from_name: '', from_email:''});

    const updateData= async (event)=>{
        const { name, value } = event.target;
        setEmailData({ ...emailData, [name]: value });
      };

    const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();

       emailjs.sendForm("service_il6b8zg", 'template_pb001mh', form.current, 'zhCenTCZqdBMtVbwy')
         .then((result) => {
            setMessage({message:'Email was sent', status:'success'})
            setEmailData({
                message: '',
                from_name: '',
                from_email:''
              })
         }, (error) => {
            setMessage({message:'Unable to send email', status:'error'})
         });
     };

  return (
    <div className="contact-container-wrapper">
    <div className="contact-top-container"></div>
    <div className="contact-container p-4">
        <h2 className="mb-3">Contact Us</h2>
        <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3 text-left contact-group" controlId="formBasicEmail">
                <Form.Label >Name</Form.Label>
                <Form.Control type="text"  onChange={updateData} value={emailData.from_name} name="from_name"/>
              </Form.Group>

              <Form.Group className="mb-3 text-left contact-group" controlId="formBasicPassword">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email"  onChange={updateData} value={emailData.from_email} name="from_email"/>
              </Form.Group>

               <Form.Group className="mb-3 text-left contact-group" controlId="exampleForm.ControlTextarea1">
                  <Form.Label >Message</Form.Label>
                  <Form.Control as="textarea" rows={8}  onChange={updateData} value={emailData.message} name="message"/>
                </Form.Group>

              <Button class="button-ct" variant="primary" type="submit">
                Send
              </Button>
            </Form>

            {message.status==='error'?<p className='text-center mt-3' style={{color:"red"}}>{message.message}</p>:null}
            {message.status==='success'?<p className='text-center mt-3' style={{color:"green"}}>{message.message}</p>:null}
    </div>
    <div className="contact-bottom-container"></div>
    </div>
  );
};

export default Contact;