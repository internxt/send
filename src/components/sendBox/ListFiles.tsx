import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import addFilesIcon from './../../assets/img/add-files.svg';
import './ListFiles.scss';

interface Props {
}

interface State {
    files: Array<{
        name: String,
        size: String
    }>
}

class ListFiles extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            files: [
                {
                    name: 'cv.pdf',
                    size: '250 MB'
                },
                {
                    name: 'holidays.jpg',
                    size: '25 MB'
                },
                {
                    name: 'users.csv',
                    size: '12 MB'
                },
                {
                    name: 'summer 2019.mp4',
                    size: '1.06 GB'
                }
            ]
        }
    }

    getFileList() {
        return (
            <Row>
                {this.state.files.map((file, index) => 
                    <Col md={12}>
                            <span className="__item-file-name">{file.name}</span>
                            <span className="__item-file-size">{file.size}</span>
                            <div className="__line-separator"></div>
                    </Col>
                )}
            </Row>

            
        );
    }

    render() {
        return(
            <div className="__list-files-container">
                <Col md={12} className="__list-files-section-1">
                    <Container style={{width: '100%', height: '100%'}}>
                        {this.getFileList()}
                    </Container>
                </Col>

                <Col md={12} className="__list-files-section-2">
                    <Container style={{width: '100%', height: '100%', paddingLeft: 0}}>
                        <Row>
                            <Col md={12} className="__add-file-text-1">
                                <img className="__add-file-icon" src={addFilesIcon} alt="Add more files"/>
                                Add more files 
                                <span className="__add-file-text-2">3 files added - 2 GB left</span>
                            </Col>
                        </Row>
                    </Container>
                </Col>

                <Col md={12} className="d-flex align-items-center __list-files-section-3">
                    <input type="button" className="__btn-create-link" value="Next"/>
                </Col>
            </div>
        );
    }
}

export default ListFiles;