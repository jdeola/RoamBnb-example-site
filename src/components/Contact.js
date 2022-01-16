import React, { useRef } from 'react';
import {Card, Container, Col, Row, Form, Button} from 'react-bootstrap';


const ContactForm = () => {


        // set reference to null and update with handleSubmit
        const nameInput = useRef(null);
        const emailInput = useRef(null);
        const addressInput = useRef(null);
        const cityInput = useRef(null);
        const stateInput = useRef(null);
        const zipInput = useRef(null);
        const messageInput = useRef(null);
    
    
        // When the form is submitted, send the form values
        // to gatbsy function for processing.
        const handleSubmit = async (e) => {
            e.preventDefault();

            const formInput = [["name", nameInput.current.value],["email", emailInput.current.value],["address", addressInput.current.value],["city", cityInput.current.value],["state", stateInput.current.value], ["zip", zipInput.current.value], ["message", messageInput.current.value]];
            const formData = new FormData();
    
            for (var input of formInput) {
                formData.append(input[0], input[1]);
            };
            
            const jsonObject = Object.fromEntries(formData);
            
            const response = await window
                .fetch(`/api/form`, {
                    method: `POST`,
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(jsonObject),
                })
                .then(res => res.json())
                .then(document.getElementById("myForm").reset())
                .then(document.getElementById("submitMessage").classList.remove("d-none"));
                
        }
        
    return (
            <Container className="h-100">
                
                <h2 className="contact-text">
                    Have a question? Ask here!
                </h2>
                <div className="h-100 d-flex justify-content-center align-items-center">
                    
                    <Card className="p-4 mb-2 col-lg-8">
                        <Form 
                            onSubmit={handleSubmit}
                            id="myForm"
                            
                            >

                            <Form.Group controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={nameInput} type="name" name="name" placeholder="Your name" required/>
                            </Form.Group>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control ref={emailInput} type="email" name="email" placeholder="Your email" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1" >
                                <Form.Label>Address</Form.Label>
                                <Form.Control ref={addressInput} name="address" placeholder="1234 Main St" required/>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control ref={cityInput} name="city" placeholder="enter city" required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control ref={stateInput} name="state" placeholder="enter state" required/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control ref={zipInput} name="zip" placeholder="enter zipcode" required/>
                                </Form.Group>
                            </Row>

                            <Form.Group as={Col} controlId="formGridMessage" className="mb-3">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control ref={messageInput} as="textarea" rows={3} name="message" placeholder="enter your message here" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Subscribe to our Mailing List for special events and informational articles?" />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="effect" id="submitButton">
                                    Submit
                                </button>
                            </div>
                            
                            
                        </Form>
                        <div className="d-none text-center fs-3" id="submitMessage">
                            Thanks for reaching out! We'll get back to you shortly
                        </div>
                    </Card>
                </div>
            </Container>
    )
}
export default ContactForm;