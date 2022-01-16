import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {Container, Nav, Navbar} from 'react-bootstrap';


const NavBar = () => {

  return (
    
      <Navbar collapseOnSelect className="" expand="sm"  fixed="top" id="nav" >
        <Container  className="p-0">
          <Link as div to="/" className="nav-brand d-inline-flex align-items-center" id="navBrand">
            <StaticImage
              src="../../static/favicon.png"
              className="me-2" 
            />
            <div className="fs-3 brownPen pe-2">
              RoamBnB
            </div>
          </Link>  
          <Navbar.Toggle  id="navToggle" data-bs-toggle="dropdown" aria-controls="responsive-navbar-nav" className="m-auto" />
          <Navbar.Collapse id="responsive-navbar-nav" className="dropdown bg-white">
            <Container className="p-0">
              <Nav className=" float-end">
                <Link to="/about" className="m-2 nav-item ">
                  about
                </Link>
                <Link to="/blog" className="m-2 nav-item ">
                  blog
                </Link>
                <Link to="/contact" className="m-2 nav-item " >
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