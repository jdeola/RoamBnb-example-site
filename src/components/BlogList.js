import React from 'react'
import BlogItem from './BlogItem'
import { Row, Col, Container } from 'react-bootstrap'

function BlogList({data}) {

    
    const { nodes } = data.allMdx;

    return (

        <Container>
        
            <Row xs={1} md={2} className="g-4">
                {nodes.map((node) => (
                    <Col>
                        <BlogItem post={node} key={node.frontmatter.id}/>
                    </Col>
                ))}
            
            </Row>
        </Container>
    )
}

export default BlogList