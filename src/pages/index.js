import React from "react";
import {Link} from 'gatsby';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { StaticImage } from "gatsby-plugin-image"



const IndexPage = ({ children }) => {


    return ( 

        <div className="splash-bg" id="">
            <Container fluid className="splashContent d-flex justify-content-center align-items-center" > 
 
                <Navbar className="d-none d-md-inline"fixed="bottom" id="splashNav">

                    <Nav className=" justify-space-between">
                        <Link to="/about" className="m-2 nav-item ">
                            about
                        </Link>
                        <Link to="/blog" className="m-2 nav-item ">
                            blog
                        </Link>
                        <Link className="m-2 nav-item " to="/contact">
                            contact
                        </Link>
                    </Nav>
                </Navbar>

                <Row className="d-flex">
                    <Col md className="p-3">
                        <StaticImage 
                            src="../images/logo-full.png"
                            layout="constrained"
                            alt="logo"
                            id="heroImg"
                        />
                    </Col>
                    <Col md={{ order: 'first' }} className="m-auto">
                        <Row className="py-3" >
                            <h1 className="text-center d-none d-md-inline">
                                RoamBnB
                            </h1>
                            <h3 className="text-center">
                                Short Term Rental Experts
                            </h3>
                        </Row> 
                        <Row className="py-3" >
                            <Col md className="d-flex justify-content-center align-items-center py-2">
                                
                                <Link to="/about">
                                    <button className="splash-btn">
                                        Learn More
                                    </button>
                                </Link>
                            </Col>
                            <Col md className="d-flex justify-content-center align-items-center py-2">
                                <button className="">
                                    Book a Call
                                </button>
                            </Col>
                            
                        </Row>
                        
                    </Col>
                </Row>
  
            </Container>
        </div>
    )
}

export default IndexPage


