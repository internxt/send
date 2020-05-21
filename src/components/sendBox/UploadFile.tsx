import React from 'react';
import './UploadFile.scss';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
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
            <div className="container" style={{width: '100%', height: '100%', padding: '10%'}}>
                <div className="col-md-12 d-flex align-items-center __section-1">
                    {/* <CircularProgressbar className="__spinner" 
                        value={this.state.value}
                        maxValue={1}
                        strokeWidth={5}
                        text={`${this.state.value * 100}%`}
                    /> */}

                    <CircularProgressbarWithChildren className="__spinner"
                        value={this.state.value}
                        maxValue={1}
                        strokeWidth={5}
                    >
                        <text className="CircularProgressbar-text">
                            {this.state.value * 100}<span className="__percent-symbol">%</span>
                        </text>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="col-md-12 __section-2">
                    <span className="__section-2-title">Uploading 5 files...</span>
                    <span className="__section-2-description">
                        {this.state.currentSize} MB of {this.state.totalSize} MB
                    </span>
                </div>
                <div className="col-md-12 d-flex align-items-center __section-3">
                    <input type="button" className="__btn-cancel-link" value="Cancel"/>
                </div>
            </div>
        );
    }
}

export default UploadFile;