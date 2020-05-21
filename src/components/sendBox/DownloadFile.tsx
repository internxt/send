import React from 'react';
import './DownloadFile.scss';
import downloadFileIcon from './../../assets/img/download.svg';
import { Container, Col, Row } from 'react-bootstrap';

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
                
                <div className="col-md-12 __download-file-section-1 d-flex align-items-center">
                    <div className="__download-file-section-1-container d-flex align-items-center">
                        <div className="__download-file-section-1-text">
                            <p>This link has been</p>
                            <p>end-to-end encrypted</p>
                            <p>and will expire in 7 days.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 __download-file-section-2 d-flex align-items-center">
                    <div className="__download-file-section-2-container d-flex align-items-center">
                        
                        <div className="container" style={{width: '100%', height: '100%'}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="__download-file-section-2-img d-flex align-items-center" src={downloadFileIcon} alt=""/>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="__download-file-section-2-text-1">Download files</div>
                                    <div className="__download-file-section-2-text-2">
                                        {this.state.files} files - {this.state.size.quantity} {this.state.size.mesure}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default DownloadFile;