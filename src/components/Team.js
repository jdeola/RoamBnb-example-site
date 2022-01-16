import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col} from 'react-bootstrap'


function Team() {


    return (
        <>
            <h1 className="text-center" >Meet Our Team</h1>
            <Container className="d-flex justify-content-center align-items-center p-3">
                
                
                <Row>
                    <Col md className="p-5">
                        <StaticImage 
                            src="../images/jeremy.png"
                            width={600}
                            height={800}
                            className="p-3"
                        />

                        <p>
                            Jeremy has been in the real estate space for three years on the construction management side. He
                            enjoys forming relationships with contractors and partners alike and making sure each project is carried
                            out correctly. He loves helping people achieve their goals and strives for customer satisfaction. Jeremy is 
                            a father to two and enjoys exercising, camping, skiing, boating, and dirt bikes.
                        </p>

                    </Col>  

                    <Col md className="p-5">
                        <StaticImage 
                            src="../images/kristen.png"
                            width={600}
                            height={800}
                        />

                        <p>
                            Kristen has been in the real estate and rental property space for over 10 years. She started out
                            managing large apartment communities for a national management company. She has overseen many
                            property management teams and dealt with apartment acquisitions, unit turnover, and major
                            renovations. She is also a licensed real estate agent extremely detail oriented. Kristen is a mother to two
                            and enjoys health and fitness, skiing, camping, and traveling. She also loves good food!
                        </p>

                    </Col>  
                </Row>



            </Container>
        </>
    )
}

export default Team
