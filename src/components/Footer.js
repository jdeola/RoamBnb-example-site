import React from 'react'
import {Container} from 'react-bootstrap'
export default function Footer() {


    return (
        <footer className="text-center">
            <Container className="d-flex justify-content-center align-items-center">

                <hr />
                <span>
                    RoamBnb © 2022, Built by {` `} 
                </span>
                
                <a href="https://www.amesdean.dev">AmesDean.dev</a> 
                {` `} with {` `}
                <a href="https://www.gatsbyjs.com">Gatsby.js</a>
            </Container>
            
       </footer>
    )
}

