import React from 'react'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';


export default function BlogPage({ data }) {

    return (
        <Layout>
            <section className="blog-padding">
                <div class="custom-shape-divider-top-1642043323">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" class="shape-fill"></path>
                    </svg>
                </div>
               
                     
                <BlogList data={data}/>

            </section>
        </Layout>
    )
};


export const data = graphql`
    query blogPage {
        allMdx {
            nodes {
                id
                frontmatter {
                    title
                    slug
                    date
                    description
                    thumb {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                    type
            }
            }
            
        }
    }
`;

