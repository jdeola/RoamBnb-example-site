import React from 'react'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';


export default function BlogPage({ data }) {

    return (
        <Layout>
            <Container>
                <section>
                    <h1>Blog</h1>
            
                    <BlogList data={data}/>
                </section>           
            </Container>
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

