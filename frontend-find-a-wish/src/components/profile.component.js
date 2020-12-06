import React from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

function Profile() {
    const jumb_styles = {
        backgroundImage: 'URL("https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-028-plum-plate.png")',
        backgroundSize: 'cover',
    };
    return (
        <Jumbotron fluid style={jumb_styles} className="vh-100">
            { /* set up cards */ }
        </Jumbotron>
    );
}
export default Profile;