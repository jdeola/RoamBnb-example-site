import React from 'react';
import BlogLayout from '../components/BlogLayout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Container } from 'react-bootstrap';



export default function BlogDetails({ data }) {

    const { body } = data.mdx;
    const { title, date, type, banner } = data.mdx.frontmatter;
    
    const bannerImg = getImage(banner);
    return (
        <BlogLayout >
            
            <section classname="">

                <div className="text-center"> 
                    <h2>{ title }</h2>
                    <p className="text-muted">{ date }</p>
                </div>


                <GatsbyImage image={bannerImg} alt=""/>

                
                    
                <MDXRenderer>{body}</MDXRenderer>                
                

            </section>
            

        </BlogLayout>
    )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
        id
        body
        frontmatter {
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

