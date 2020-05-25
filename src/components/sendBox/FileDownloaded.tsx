import React from 'react';
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
            <div className="container" style={{width: '100%', height: '100%'}}>
                <div className="col-md-12 __separator-container"></div>
                <div className="col-md-12 __section-1 ">
                    <div className="" style={{width: '100%', height: '100%'}}>
                        <div className="__img-container  d-flex align-items-center">
                            <img className="__success-icon" src={successIcon} alt="Internxt success"/>
                        </div>
                    
                        <span className="__section-1-title ">Files downloaded!</span>
                        <span className="__section-1-description-1 ">The files have been downloaded to your</span>
                        <span className="__section-1-description-2 ">computer (downloads folder)</span>
                    </div>
                </div>

                <div className="col-md-12 __section-2">
                    <span className="__section-1-description-2 __download-again">Downloads files again?</span>
                </div>

                <div className="col-md-12 d-flex align-items-center __section-3">
                    <input type="button" className="__btn-create-link" value="Create a new link"/>
                </div>
            </div>
        );
    }
}

export default FileDownloaded;