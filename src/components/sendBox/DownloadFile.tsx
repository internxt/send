import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './DownloadFile.scss';
import downloadFileIcon from './../../assets/img/download.svg';


interface Props {
    files: Number,
    size: {
        quantity: Number,
        mesure: String
    }
}
interface State {
    files: Number,
    size: {
        quantity: Number,
        mesure: String
    }
}

class DownloadFile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            files: this.props.files,
            size: {
                quantity: this.props.size.quantity,
                mesure: this.props.size.mesure
            }
        };
    }

    render() {
        return(
            <div className="__download-file-container">
                <Col md={12} className="__download-file-section-1 d-flex align-items-center">
                    <div className="__download-file-section-1-container d-flex align-items-center">
                        <div className="__download-file-section-1-text">
                            <p>This link has been</p>
                            <p>end-to-end encrypted</p>
                            <p className="__p-latest">and will expire in 7 days.</p>
                        </div>
                    </div>
                </Col>

                <Col md={12} className="__download-file-section-2 d-flex align-items-center">
                    <div className="__download-file-section-2-container d-flex align-items-center">

                        <Container style={{width: '100%', height: '100%'}}>
                            <Row>
                                <Col md={12}>
                                    <Image 
                                        alt="Download file"
                                        src={downloadFileIcon}
                                        className="__download-file-section-2-img d-flex align-items-center"
                                    />
                                </Col>

                                <Col md={12}>
                                    <div className="__download-file-section-2-text-1">Download files</div>
                                    <div className="__download-file-section-2-text-2">
                                        {this.state.files} files - {this.state.size.quantity} {this.state.size.mesure}
                                    </div>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </Col>
            </div>
        );
    }
}

export default DownloadFile;