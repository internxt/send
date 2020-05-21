import React from 'react';
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
            <div className="container" style={{width: '100%', height: '100%'}}>
                <div className="col-md-12 __separator-container"></div>
                <div className="col-md-12 __section-1 ">
                    <div className="" style={{width: '100%', height: '100%'}}>
                        <div className="__img-container  d-flex align-items-center">
                            <img className="__success-icon" src={successIcon} alt="Internxt success"/>
                        </div>
                    
                        <span className="__section-1-title ">You're all set</span>
                        <span className="__section-1-description-1 ">Your link has been end-to-end encrypted</span>
                        <span className="__section-1-description-2 ">and will expire in 7 days</span>
                    </div>
                </div>

                <div className="col-md-12 __section-2">
                    <div className="__link d-flex align-items-center">
                        <span className="__link-text">{this.state.link}</span>
                        <img className="__copy-icon" src={copyIcon} alt=""/>
                    </div>
                </div>
                <div className="col-md-12 d-flex align-items-center __section-3">
                    <div className="__btn-create-link">Create a new link</div>
                </div>
            </div>
        );
    }
}

export default LinkDetails;