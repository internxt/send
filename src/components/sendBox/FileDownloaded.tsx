import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';
import './FileDownloaded.scss';
import successIcon from './../../assets/img/tick.svg';

interface Props {}
interface State {}

class FileDownloaded extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
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

                        <span className="__section-1-title ">Files downloaded!</span>
                        <span className="__section-1-description-1 ">The files have been downloaded to your</span>
                        <span className="__section-1-description-2 ">computer (downloads folder)</span>
                    </div>
                </Col>
                
                <Col md={12} className="__section-2">
                    <span className="__section-1-description-2 __download-again">
                        Downloads files again?
                    </span>
                </Col>
                
                <Col md={12} className="d-flex align-items-center __section-3">
                    <input type="button" className="__btn-create-link" value="Create a new link" />
                </Col>
            </Container>
        );
    }
}

export default FileDownloaded;