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
        threshold: 0
    }, targetRef);


    return ( 
        <Layout>
            <section className="bg-white">
                {/* <h1 >About us</h1> */}
                <div className="fixed-bg"  >
                                        
                </div>

                <Container fluid className="about">
                    <div className="key-bg">

                    </div>
                    <Row className="fs-5 keyContent">
                        <Col sm={2} md={4} ></Col>
                        <Col className="">
                            <Row >
                                <Col lg className="">
                                    <p >
                                        Roambnb is a national property management company that specializes in short-term vacation rental
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
                <Container fluid className="about2 d-flex align-items-center" >
                    <Row className="flex-row-reverse">
                        
                        <Col md className="d-flex align-items-center">
                            <StaticImage 
                                src="../images/patio.jpeg"
                            />

                        </Col>
                        <Col md >
                            <p>
                                We handle the entire process and manages the property after it is converted, creating a seamless experience for our clients. 
                                We take pride in what we do and truly get inspired by helping families and investors alike. We also love helping
                                families purchase their dream vacation home!
                            </p>
                        </Col>
                    </Row>
                </Container>
                    
                    
            </section>

            <section className="services"  >
                <Container fluid className="beachHouse">
                    <h1>Our Services</h1>
                    <Row>
                        <Col md></Col>
                        <Col md>
                            <p>
                                RoamBnB allows you to take a passive approach to owning rental properties while netting you two
                                to three times more money than traditional long term rentals. Our first step in the process involves
                                analyzing your property, or potential properties, to make sure it’s a good fit as a short term rental. 
                            </p>
                        </Col>
                    </Row>
                             
                </Container>
                <Container fluid className="fit-content" >
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col>
                            <p>    
                                Once we establish a property is a good fit, we handle 100% of the transition as well as the day to day
                                operations. Here at Roambnb we want you to take a permanent vacation from worrying about your
                                property and leave it to us!
                            </p>
                        </Col>
                        <Col className="d-flex justify-content-center p-3">
                            <StaticImage 
                                src="../images/undraw_deliveries.png"
                                alt="people carrying boxes"
                                width={400}
                                height={300}

                            />
                        </Col>
                    </Row>
                    
                    <hr />
                    
                    <p>
                        We take pride in the work we do and the partners we have. We’ve sought out the best companies and
                        utilize them to help manage our properties safely and efficiently. Using the latest technology we are
                        able to ensure each property is meticulously maintained and safely monitored so you can have peace of
                        mind.
                    </p>
                </Container>
            </section>
            
            <section  ref={targetRef}>
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


