import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './LinkDetails.scss';
import successIcon from './../../assets/img/tick.svg';
import copyIcon from './../../assets/img/copy.svg';

interface Props {
    link: String
}

interface State {
    link: String
}

class LinkDetails extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            link: this.props.link
        }
    }

    render() {
        return(
            <Container style={{width: '100%', height: '100%'}}>
                <Col md={12} className="__separator-container"></Col>
                <Col md={12} className="__section-1">
                    <div style={{width: '100%', height: '100%'}}>
                        <div className="__img-container d-flex align-items-center">
                            <Image
                                alt="Internxt success"
                                src={successIcon}  
                                className="__success-icon"
                            />
                        </div>

                        <span className="__section-1-title ">You're all set</span>
                        <span className="__section-1-description-1 ">Your link has been end-to-end encrypted</span>
                        <span className="__section-1-description-2 ">and will expire in 7 days</span>
                    </div>
                </Col>

                <Col md={12} className="__section-2">
                    <div className="__link d-flex align-items-center">
                        <span className="__link-text">{this.state.link}</span>
                        <Image
                            alt="Copy link"
                            title="Copy"
                            src={copyIcon}
                            className="__copy-icon"
                        />
                    </div>
                </Col>

                <Col md={12} className="d-flex align-items-center __section-3">
                    <div className="__btn-create-link">
                        Create a new link
                    </div>
                </Col>
            </Container>
        );
    }
}

export default LinkDetails;