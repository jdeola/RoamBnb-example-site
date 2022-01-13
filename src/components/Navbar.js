import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {Container, Nav, Navbar} from 'react-bootstrap';


const NavBar = () => {

  return (
    
      <Navbar collapseOnSelect className="" expand="md"  fixed="top" id="nav" >
        <Container>
          <Link to="/" className="nav-brand d-inline-flex align-items-center" id="navBrand">
            <StaticImage
              src="../static/favicon.png"
              className="me-2" 
            />
            <span className="fs-3 brownPen">
              RoamBnB
            </span>
          </Link>  
          <Navbar.Toggle  id="navToggle" data-bs-toggle="dropdown" aria-controls="responsive-navbar-nav" className="me-2" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Container>
              <Nav className=" justify-space-between float-end">
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
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
};



export default NavBar;