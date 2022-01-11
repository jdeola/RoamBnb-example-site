import React, { Fragment } from "react";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from './Navbar';
import "../styles/global.css";
import Seo from "./Seo";
import Footer from "./Footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { twitterIcon } from "@fortawesome/free-solid-svg-icons";



const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          url
        }
      }
    }
  `)


  const { title, description, image, url } = data.site.siteMetadata
  
  return (
    <div data-bs-spy="scroll" data-bs-target="#nav" data-bs-offset="50" id="layout">
      <div id="layout-wrapper">
        <Seo
          title={title}
          description={description}
          image={image}
          pathname={url}
          />

        <NavBar />
        

        <main>{children}</main>
  

        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
