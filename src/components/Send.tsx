import React from 'react';
import './Send.scss';
import { Container, Row, Col } from 'react-bootstrap';
import SendBox from './sendBox/SendBox';
import Header from './header/Header';
import Footer from './footer/Footer';
import TextCarousel from './textCarousel/TextCarousel';
import BtnSignup from './btnSignup/BtnSignup';
import MobileHeader from './header/MobileHeader';

interface Props {}
interface State {}

class Send extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return(
            <Container id="main" fluid>
                <Col md={12} className="__header d-none d-sm-block">
                    <Header />
                </Col>

                <Row className="__body">
                    <Col md={6} className="d-none d-sm-block">
                        <Col md={12} className="__hide-separator"></Col>

                        <Col md={12} className="__carousel d-flex align-items-center">
                            <TextCarousel />
                        </Col>

                        <Col md={12} className="__signup-btn">
                            <BtnSignup />
                        </Col>
                    </Col>

                    <Col md={6} className="__modal">
                        <Col md={12} className="__mobile-header d-sm-none d-flex align-items-center">
                            <MobileHeader />
                        </Col>

                        <Col md={12} className="__send-box">
                            <SendBox />
                        </Col>
                    </Col>
                </Row>

                <Col md={12} className="__footer d-none d-sm-block">
                    <Footer />
                </Col>
            </Container>  
        );
    }
}

export default Send;