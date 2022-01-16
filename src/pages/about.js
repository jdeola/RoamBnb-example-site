import React, { useRef } from "react";
import Layout from "../components/Layout.js";
import { Container, Row, Col } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import Partners from "../components/Partners.js"
import useElementOnScreen from "../utilities/useElementObserver.js";
import Team from "../components/Team.js";
import Blob from "../assets/blob-haikei.svg"

const AboutPage = ({ children }) => {

    const targetRef = useRef(null);

    const isVisible = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 0
    }, targetRef);


    return ( 
        <Layout>
            <section className="100vw">
                
                <div className="fixed-bg"></div>
                
                <Container fluid className= {isVisible? "about show" : "about" } >
                    <div className="key-bg"></div>
              
                    <Row className="fs-2 keyContent pe-3">
                        <Col xs={2} md={4} lg={5}></Col>
                        <Col className="">
                          
                            <p className="text-center">
                                Roambnb is a national property management company that specializes in short-term vacation rental
                                properties. 
                            </p>
                        
                        </Col>
                    </Row>
                    
                </Container>

                <div id="keyImg-placeholder"ref={targetRef}></div>
         
                <Container fluid className="about2 py-3">
                    <div class="custom-shape-divider-top-1642043515">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <Row>
                        <Col className="d-flex align-items-center">
                            <p className="text-center zIndex1">
                                We help investors and existing home owners maximize their returns by converting
                                traditional long term rental properties into short term rentals. 
                            </p>
                        </Col>
                        <Col md className="d-flex justify-content-center">
                            <StaticImage 
                                src="../images/undraw_revenue.png"
                                id="revenue"
                                width={400}
                                height={465}
                            />

                        </Col>
                    </Row>
                </Container>
                
                    
                    
            </section>

            <section className="services"  >
                <Container fluid className="d-flex align-items-center beachHouse">
                    
                    <Row>
                        <Col md></Col>
                        <Col md>
                            <h1 className="text-center">Our Services</h1>
                            <p className="text-center fs-4">
                                We handle the entire process and manages the property after it is converted, creating a seamless experience for our clients. 
                                We take pride in what we do and truly get inspired by helping families and investors alike. We also love helping
                                families purchase their dream vacation home!
                
                            </p>

                        </Col>
                    </Row>
                             
                </Container>
                <Container fluid className="about2 d-flex align-items-center" >
                    <Blob className="blob"/>
                    <Row className="flex-row-reverse">
                        
                        <Col md className="d-flex align-items-center">
                            <StaticImage 
                                src="../images/patio.jpeg"
                                className="zIndex1"
                            />
                            
                        </Col>
                        <Col md >
                            <p className="pb-2">
                                Take a passive approach to owning rental properties 
                                while making 2-3x the revenue of a long-term rental.
                            </p>
                            <p className="pb-3 consult-text">
                                Schedule a consult to see if your property is a good fit!
                            </p>
                            
                            <button className="effect d-flex justify-self-center">
                                <Link to="/contact">Contact us</Link>
                            </button>    
                        
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="" >
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md className="zIndex1">
                            <p className="text-center">    
                                We handle 100% of the transition as well as the day to day
                                operations
                            </p>
                            <p className="text-center">
                                So you can take a permanent vacation from worrying about your
                                property
                            </p>
                        </Col>
                        <Col md className="d-flex justify-content-center align-items-center p-3">
                            <StaticImage 
                                src="../images/undraw_deliveries.png"
                                alt="people carrying boxes"
                                width={400}
                                height={300}
                                className="zIndex1"
                            />
                        </Col>
                    </Row>
                    <div class="custom-shape-divider-bottom-1642099140">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                        </svg>
                    </div>
                    
                </Container>
            </section>
            
            <section >
                <Container >
                    <Partners/>
                </Container>
                
                
            </section>
            
            <section className="bg-white">
                <Team />
            </section>
            
            
      
        </Layout>
    )
}

export default AboutPage


