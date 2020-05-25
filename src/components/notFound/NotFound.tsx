import React from "react";
import "./NotFound.scss";
import { Container, Row } from 'react-bootstrap';
import Header from './../header/Header';
import Footer from './../footer/Footer';

interface Props {}
interface State {}

class NotFound extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

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