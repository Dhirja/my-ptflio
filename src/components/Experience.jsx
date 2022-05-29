
import { Zoom, Fade } from 'react-awesome-reveal'

import ca from '../media/CA.png'
import dsc from '../media/bbuy.png'
import nyka from '../media/nyka.png'

import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'


const Experience = ({ darkMode }) => {

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
                <Container>
                    <br></br>
                    <h2 className="lead" align="center"><b>My recent works</b></h2>
                    <br></br>
                    <h3 className="lead" align="center">Here are a few projects I've worked on recently.</h3>
                    <br></br>
                    <Zoom>
                        <Row>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={dsc} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Clone of BESTBUY.com</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">BESTBUY is an online marketplace for Electronics consumer product. Its headquartered in US</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p> Users can add items to the cart and make payment through many merchants..
                                                        <br></br> Users can filter the item on the price, discount, brand, etc
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://distracted-pasteur-d400f9.netlify.app/homepage/homepagecomplete.html" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Project</Button>
                                        </a>
                                        <a href="https://github.com/Dhirja/Project---bestbuy.com" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>
                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={ca} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Clone of BIGBASKET.com</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">BigBasket is an online food and grocery store that delivers personal and household needs right to customers' doorstep.</p>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p> Users can purchase things and make payment through many merchants like Paytm, Google etc.
                                                        <br></br> Users can filter as per their convenince etc
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript, ExpressJs, Nodejs, ReactJs and Redux.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://big-basket-clone-by-masai-school.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"}>View Project</Button>
                                        </a>
                                        <a href="https://github.com/Dhirja/Big-basket-clone/tree/main/bigbasket-clone" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>

                            <Col lg={4} sm={12}>
                                <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                                    <br></br>
                                    <center>
                                        <div class="flip-card">
                                            <div class="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <Card.Img variant="top" src={nyka} />
                                                    <Card.Body>
                                                        <Card.Title align="center">Clone of NYKAAMAN.COM</Card.Title>
                                                        <Card.Text>
                                                            <p align="center">NYKAAMAN.COM A web application Producer of Personal care products intended to offer
assistance in maintaining and grooming beards.</p>    
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                                <div className="flip-card-back">
                                                    <p> Users can purchase things and make payment through many merchants like Paytm, Google etc.
                                                        <br></br> Users can filter as per their convenince etc
                                                        <br></br>Tech Stack - HTML, CSS, JavaScript.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </center>
                                    <br></br>
                                    <div>
                                        <a href="https://remarkable-klepon-8f9936.netlify.app/" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"}>View Project</Button>
                                        </a>
                                        <a href="https://github.com/Dhirja/Nyka-man-clone" target="_blank" rel="noreferrer noopener">
                                            <Button className='a' variant={darkMode ? "outline-light" : "outline-dark"} >View Github Repo</Button>
                                        </a>
                                    </div>
                                    <br></br>
                                </Card>
                            </Col>

                        </Row>
                    </Zoom>
                    <br></br>
                </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Experience
