import React, { useRef } from "react";
import Layout from "../components/Layout.js";
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"
import Partners from "../components/partners"
import useElementOnScreen from "../utilities/useElementObserver.js";
import Team from "../components/Team.js";


const AboutPage = ({ children }) => {

    const targetRef = useRef(null);

    const isVisible = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1
    }, targetRef);


    return ( 
        <Layout>
            <section >
                {/* <h1 >About us</h1> */}
                <Container fluid className="about">
                    <div className="key-bg">

                    </div>
                    <Row className="fs-5 keyContent">
                        <Col sm={2} md={5} ></Col>
                        <Col className="">
                            <Row >
                                <Col lg className="">
                                    <p >
                                        Roambnb is a national property management company that specializes in short term, vacation rental
                                        properties. 
                                    </p>
                                </Col>
                            
                                <Col lg className="" >
                                    <p>
                                        We help investors and existing home owners maximize their returns by converting
                                        traditional long term rental properties into short term rentals. 
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    
                </Container>
                    {/* <Row>
                        <Col>
                            <p>
                                We handle the entire process and manages the property after it is converted, creating a seamless experience for our clients. 
                                We take pride in what we do and truly get inspired by helping families and investors alike. We also love helping
                                families purchase their dream vacation home!
                            </p>
                        </Col>
                        <Col>
                            <StaticImage 
                                src="../images/fishing.jpeg"
                            />

                        </Col>
                    </Row> */}
                    
                </section>

                <section className="services">
                    <h1>Our Services</h1>
                    <p>
                        RoamBnB allows you to take a passive approach to owning rental properties while netting you two
                        to three times more money than traditional long term rentals. Our first step in the process involves
                        analyzing your property, or potential properties, to make sure it’s a good fit as a short term rental. 
                    </p>
                    <p>    
                        Once we establish a property is a good fit, we handle 100% of the transition as well as the day to day
                        operations. Here at Roambnb we want you to take a permanent vacation from worrying about your
                        property and leave it to us!
                    </p>
                </section>
                
                <section className={ isVisible ? "partners show" : "partners"}>
                    <Container>
                        <Partners/>
                    </Container>
                    
                    
                </section>
                    <div ref={targetRef} >
                                            
                    </div>
                <section >
                    <h1 >Meet Our Team</h1>
                    <Team />
                </section>

            
      
        </Layout>
    )
}

export default AboutPage


