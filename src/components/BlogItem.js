import React from 'react';
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Card } from 'react-bootstrap';



const BlogItem = ({post, key}) => {

  const { slug, title, thumb, description } = post.frontmatter;

  const thumbImg = getImage(thumb);

  return (

    <Link to={"/" + slug} id={key}> 
      <Card className="mx-2 h-100 blog-card" >
          <Card.Title className="fs-3 text-center py-2">
            {title}
          </Card.Title>
          <div className="card-img-top">
            <GatsbyImage 
              image={thumbImg} 
              alt="featured article image" 
              className="blog-img"
            />
          </div>
          
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