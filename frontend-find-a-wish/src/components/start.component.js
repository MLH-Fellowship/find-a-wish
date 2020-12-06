import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';


function GetStarted() {
    /* Style to make purple jumbotron cover entire view */
    const jumb_styles = {
        backgroundImage: 'URL("https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-028-plum-plate.png")',
        backgroundSize: 'cover'
    };
    /* Section where user can read how to start and navigate from there */
    return (
        <Jumbotron fluid style={jumb_styles} id="start">
            <Container fluid>
                <Row className="justify-content-center align-items-center">
                    <Col lg={3}></Col>
                    <Col lg={6} className="py-5">
                        <h1 className="text-light text-center">Organization or Donator?</h1>
                        <br></br>
                        <h3 className="text-light text-center">If you are an organization, get started by posting a wishlist. If you are a donator, browse the various wishlists and organizations!</h3>
                        <br></br>
                        <br></br>
                        <p className="lead text-center" style={{textAlign: 'center'}}>
                            <Button variant="light" href="/organizations" className="btn btn-lg" style={{display: 'inline-block'}}>Organizations</Button>
                            <br></br>
                        </p>
                        <p className="lead text-center" style={{textAlign: 'center'}}>
                            <Button variant="light" href="/wishlistform" className="btn btn-lg" style={{display: 'inline-block'}}>Post a Wishlist</Button>
                        </p>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </Jumbotron>
    )
};
export default GetStarted;