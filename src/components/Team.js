import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Row, Col, Card} from 'react-bootstrap'


function Team() {


    return (
        <>
            <div class="custom-shape-divider-top-1642373815">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <h1 className="text-center pt-3 teamTitle" >Meet Our Team</h1>
            <Container className="d-flex justify-content-center align-items-center p-3">
                
                
                <Row className="d-flex align-items-stretch">
                    <Col md className="p-5">
                    <Card className="bio-card">
                        
                        <div className="card-img-top">
                            <StaticImage 
                                src="../images/jeremy.png"
                                width={600}
                                height={800}
                                className=""
                            />
                        </div>
                        <Card.Title className="text-center bio-name">
                            Jeremy Blevins
                        </Card.Title>

                        <p className="bio-text card-text">
                            Jeremy has been in the real estate space for three years on the construction management side. He
                            enjoys forming relationships with contractors and partners alike and making sure each project is carried
                            out correctly. He loves helping people achieve their goals and strives for customer satisfaction. Jeremy is 
                            a father to two and enjoys exercising, camping, skiing, boating, and dirt bikes.
                        </p>
                    </Card>
                        

                    </Col>  

                    <Col md className="p-5">
                        <Card className="bio-card">
                            
                            <div className="card-img-top">
                                <StaticImage 
                                    src="../images/kristen.png"
                                    width={600}
                                    height={800}
                                />
                            </div>
                            <Card.Title className="text-center bio-name">        
                                 Kristen Blevins
                            </Card.Title>
                            <p className="bio-text card-text">
                                Kristen has been in the real estate and rental property space for over 10 years. She started out
                                managing large apartment communities for a national management company. She has overseen many
                                property management teams and dealt with apartment acquisitions, unit turnover, and major
                                renovations. She is also a licensed real estate agent extremely detail oriented. Kristen is a mother to two
                                and enjoys health and fitness, skiing, camping, and traveling. She also loves good food!
                            </p>
                        </Card>
                    </Col>  
                
                </Row>



            </Container>
        </>
    )
}

export default Team
