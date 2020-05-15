import React from 'react';
import './LinkSettings.scss';

class LinkSettings extends React.Component {
    render() {
        return(
            <div className="container" style={{width: '100%', height: '100%', padding: '10%'}}>
                <div className="col-md-12 __link-settings-container-1">
                    <span className="__link-settings-email">gtormo@internxt.com</span>
                    <div className="__link-settings-separator"></div>
                </div>

                <div className="col-md-12 __link-settings-container-2">
                    <p className="__link-settings-text-1">
                        Hey, Attatched are the designs for Internxt Send. Can you have a look and send me back any feedback. Thanks :)
                    </p>

                    <span className="__link-settings-text-2">100 Characters of 100</span>
                    <div className="__link-settings-separator-2"></div>
                </div>

                <div className="col-md-12 __link-settings-container-3">
                    <span className="__link-settings-check-text">Limit the amount your link can open</span>
                    <span className="__link-settings-check-text">Get an email when your link opens</span>
                    <span className="__link-settings-check-text">Add a password to your link</span>
                </div>

                <div className="col-md-12 d-flex align-items-center __link-settings-container-4">
                    <input type="button" className="__btn-create-link" value="Create link"/>
                </div>
            </div>
        );
    }
}

export default LinkSettings;