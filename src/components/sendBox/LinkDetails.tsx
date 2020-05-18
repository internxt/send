import React from 'react';
import './LinkDetails.scss';

interface IProps {
    link: String
}

interface IState {
    link: String
}

class LinkDetails extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            link: this.props.link
        }
    }

    render() {
        return(
            <div className="container border" style={{width: '100%', height: '100%', padding: '10%'}}>
                <div className="col-md-12 d-flex align-items-center __section-1 border"></div>
                <div className="col-md-12 d-flex align-items-center __section-2 border">
                    <div className="__link d-flex align-items-center">
                        <span className="__link-text">{this.state.link}</span>
                    </div>
                </div>
                <div className="col-md-12 d-flex align-items-center __section-3 border">
                    <div className="__btn-create-link">Create a new link</div>
                </div>
            </div>
        );
    }
}

export default LinkDetails;