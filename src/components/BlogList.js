import React from 'react'
import BlogItem from './BlogItem'
import { Row, Col, Container } from 'react-bootstrap'

function BlogList({data}) {

    
    const { nodes } = data.allMdx;

    return (

        <Container>
        
            <h1 className="blogTitle">Blog</h1> 

            <Row xs={1} md={2} className="p-3">
                {nodes.map((node) => (
                    <Col xs={12} md={6} >
                        <BlogItem post={node} key={node.frontmatter.id}/>
                    </Col>
                ))}
            
            </Row>
        </Container>
    )
}

export default BlogList