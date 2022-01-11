import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Card } from 'react-bootstrap';



const BlogItem = ({post, key}) => {

  const { slug, title, thumbImage, description } = post.frontmatter;

  return (

    <Link to={"/" + slug} id={key}> 
      <Card className="mx-2 h-100 blog-card" >
          <Card.Title className="fs-3 text-center py-2">
            {title}
          </Card.Title>
          <GatsbyImage 
            image={thumbImage} 
            alt="featured article image" 
            className="blog-img"
          />
          <Card.Body>
              <Card.Text>
                {description}
              </Card.Text>
          </Card.Body>
              
      </Card>
    </Link>
    
  )
}

export default BlogItem;