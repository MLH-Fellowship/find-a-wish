import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import wishlist from '../images/wishlist-line-icon-vector.jpg';
import supplies from '../images/supplies.png';


function About() {
    const aboutStyles = {
        background: 'transparent',
    }
    return (
        <Jumbotron fluid style={aboutStyles}>
            <Container fluid>
                <Row className="justify-content-center align-items-center">
                    <h2 className="display-4 text-center lead">Organizations around the world perform social good for any community, big or small.</h2>
                </Row>
                <br></br>
                <br></br>
                <Row className="align-items-center px-5">
                    <Col lg={1}></Col>
                    <Col lg={6}>
                        <h3>You can contribute to these organizations by helping them get the supplies
                        they need in order to continue their missions</h3>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg={4}>
                        <img src={wishlist} alt="wishlist-icon" style={{ height: '300x', width: '200px' }}></img>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row className="align-items-center px-5">
                    <Col lg={2}></Col>
                    <Col lg={1}>
                        <img src={supplies} alt="supplies-icon" style={{ height: '300x', width: '200px' }}></img>
                    </Col>
                    <Col lg={3}></Col>
                    <Col lg={5}>
                        <h3>Some examples can be buying blankets for homeless shelters or donating supplies to
                        schools in need.</h3>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </Jumbotron>

    );
}
export default About;
