import React from 'react';
import { Container, Col } from 'react-bootstrap';
import './DownloadByPassword.scss';

interface Props {}
interface State {}

class DownloadByPassword extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <Container style={{width: '100%', height: '100%', padding: '10%'}}>
            <Col md={12} className="__password-hidden"></Col>
            
            <Col md={12} className="__password-info d-flex align-items-center">
                <div style={{margin: 'auto'}}>
                    <span className="__password-info-title">Password protected</span>
                    <span className="__password-info-description">Enter password to download the files</span>
                </div>
            </Col>

            <Col md={12} className="__password-input">
                <input type="password" className="d-flex align-items-center" placeholder="Password"/>
            </Col>
        </Container>
        );
    }
}

export default DownloadByPassword;