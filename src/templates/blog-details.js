import React from 'react';
import BlogLayout from '../components/BlogLayout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container } from 'react-bootstrap';


export default function BlogDetails({ data }) {

    const { body } = data.mdx;
    const { title, date, banner } = data.mdx.frontmatter;
    
    const bannerImg = getImage(banner);

    return (
        <BlogLayout >
        

                <div className="text-center pt-3"> 
                    <h2>{ title }</h2>
                    <p className="text-muted">{ date }</p>
                </div>


                <GatsbyImage image={bannerImg} alt=""/>

                <Container>
                    <MDXRenderer>{body}</MDXRenderer>  
                </Container>

        </BlogLayout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
        id
        body
        frontmatter {
            slug
            title
            date
            type
            banner {
                childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                }
            }
        }
    }
  }`

