import React from 'react';
import { Container, Col } from 'react-bootstrap';
import './UploadFile.scss';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props {}

interface State {
    files: Array<object>,
    value: number,
    currentSize: number,
    totalSize: number,
}

class UploadFile extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            files: [],
            value: 0.00,
            currentSize: 0,
            totalSize: 928
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                value: Math.round(this.state.value + 0.08 * 100) / 100,
                currentSize: Math.round(this.state.totalSize * 0.08 / 1)
            });
            setTimeout(() => {
                this.setState({
                    value: Math.round(this.state.value + 0.32 * 100) / 100,
                    currentSize: Math.round(this.state.totalSize * 0.32 / 1)
                });
                setTimeout(() => {
                    this.setState({
                        value: Math.round(this.state.value + 0.54 * 100) / 100,
                        currentSize: Math.round(this.state.totalSize * 0.54 / 1)
                    });
                    setTimeout(() => {
                        this.setState({
                            value: Math.round(this.state.value + 0.87 * 100) / 100,
                            currentSize: Math.round(this.state.totalSize * 0.87 / 1)
                        });
                        setTimeout(() => {
                            this.setState({
                                value: Math.round(1.00 * 100) / 100,
                                currentSize: Math.round(this.state.totalSize * 1.00 / 1)
                            });
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }

    render() {
        return(
            <Container style={{width: '100%', height: '100%', padding: '10%'}}>
                <Col md={12} className="d-flex align-items-center __section-1">
                    <CircularProgressbarWithChildren className="__spinner"
                            value={this.state.value}
                            maxValue={1}
                            strokeWidth={5}
                        >

                        <text className="CircularProgressbar-text">
                            {this.state.value * 100}<span className="__percent-symbol">%</span>
                        </text>
                    </CircularProgressbarWithChildren>
                </Col>

                <Col md={12} className="__section-2">
                        <span className="__section-2-title">Uploading 5 files...</span>
                        <span className="__section-2-description">
                            {this.state.currentSize} MB of {this.state.totalSize} MB
                        </span>
                </Col>

                <Col md={12} className="d-flex align-items-center __section-3">
                    <input type="button" className="__btn-cancel-link" value="Cancel"/>
                </Col>
            </Container>
        );
    }
}

export default UploadFile;