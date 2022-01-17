import React from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Navbar } from 'react-bootstrap';
import "../styles/global.css";
import { MDXProvider } from "@mdx-js/react"
import { Button, Card } from "react-bootstrap";
import Seo from "./Seo";
import Footer from "./Footer";

// pass bootstrap react components as shortCodes to all 
// blog posts rendered thru MDX provider

const shortCodes = { Button, Card };

const BlogLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query BlogTitleQuery {
      mdx {
          frontmatter {
              title
              slug
              date
              description
              thumb {
                childImageSharp{
                  gatsbyImageData
                }  
                publicURL
              }
              
          }
      }
    }
  `)
   
  const article = data.mdx.frontmatter

  return (
    <div id="layout">
      <div id="layout-wrapper">
        <Seo
            title={article.title}
            description={article.description }
            image={article.thumb.publicURL}
            pathname={article.slug}
            type={'article'}
        />

        <Navbar className="" fixed="top" id="blogNav">
            <Navbar.Brand className="ms-2 ps-2" >
                <Link to="/about" className="d-flex align-items-center">
                    <StaticImage 
                        src=""
                        alt=''    
                        width={75}
                        height={50}
                        className=""
                    /> {' '}
                    <span className=" ms-2 ps-2 ">
                        Back to home page
                    </span>
                        
                </Link>    
            </Navbar.Brand>   
            
        </Navbar>
        <section className="blog-padding">
          <MDXProvider components={shortCodes}>{children}</MDXProvider>
        </section>

        <Footer />
      </div>
    </div>
   )
 }
 
 BlogLayout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default BlogLayout
 