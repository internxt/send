import React from "react";
import "./NotFound.scss";
import { Container, Row } from 'react-bootstrap';
import Header from './../header/Header';
import Footer from './../footer/Footer';

class NotFound extends React.Component {
    render() {
        return (
            <Container id="main" fluid>
                <Row className="__header">
                    <Header />
                </Row>

                <Container className="__body-not-found">
                    <Container className="__not-found d-flex align-items-center">
                        <h3>Sorry, page not found!</h3>
                    </Container>
                </Container>

                <Row className="__footer">
                    <Footer />
                </Row>
            </Container>
        );
    }
}

export default NotFound;