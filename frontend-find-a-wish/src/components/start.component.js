import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';

function GetStarted() {
    const jumb_styles = {
        backgroundImage: 'URL("https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-028-plum-plate.png")',
        backgroundSize: 'cover'
    };
    return (
        <Jumbotron fluid style={jumb_styles}>
            <Container fluid>
                <Row className="justify-content-center align-items-center">
                    <Col lg={3}></Col>
                    <Col lg={6} className="py-5">
                        <h1 className="text-light text-center">Log in or sign up to give back today!</h1>
                        <br></br>
                        <p className="lead text-center" style={{textAlign: 'center'}}>
                            <Button variant="light" href="/signup" className="btn btn-lg" style={{display: 'inline-block'}}>Log In</Button>
                            <br></br>
                        </p>
                        <p className="lead text-center" style={{textAlign: 'center'}}>
                            <Button variant="light" href="/signup" className="btn btn-lg" style={{display: 'inline-block'}}>Sign Up</Button>
                        </p>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </Jumbotron>
    )
};
export default GetStarted;