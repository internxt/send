import React from 'react';
import './DownloadByPassword.scss';

class DownloadByPassword extends React.Component {
    render() {
        return(
            <div className="container" style={{width: '100%', height: '100%', padding: '10%'}}>
                <div className="col-md-12 __password-hidden"></div>
                <div className="col-md-12 __password-info d-flex align-items-center">
                    <div style={{margin: 'auto'}}>
                        <span className="__password-info-title">Password protected</span>
                        <span className="__password-info-description">Enter password to download the files</span>
                    </div>
                </div>
                <div className="col-md-12 __password-input">
                    <input type="password" className="d-flex align-items-center" placeholder="Password"/>
                </div>
            </div>
        );
    }
}

export default DownloadByPassword;