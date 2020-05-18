import React from 'react';
import './UploadFile.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface IProps {
}

interface IState {
    value: any,
    currentSize: any,
    totalSize: any,
}

class UploadFile extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
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
                    <CircularProgressbar className="__spinner" 
                        value={this.state.value}
                        maxValue={1}
                        text={`${this.state.value * 100}%`}
                    />
                </div>
                <div className="col-md-12 __section-2">
                    <span className="__section-2-title">Uploading 5 files</span>
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