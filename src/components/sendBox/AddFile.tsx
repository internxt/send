import React from 'react';
import './AddFile.scss';
import addFileIcon from './../../assets/img/plus.svg';

class AddFile extends React.Component {
    render() {
        return (
            <div className="__add-file-container">
                
                <div className="col-md-12 __add-file-section-1 d-flex align-items-center">
                    <div className="__add-file-section-1-container d-flex align-items-center">
                        
                        <div className="__add-file-section-1-text">
                            <p>Send files for free.</p>
                            <p>End-to-end encrypted.</p>
                            <p>Zero-knowledge.</p>
                        </div>

                    </div>
                </div>

                <div className="col-md-12 __add-file-section-2 d-flex align-items-center">
                    <div className="__add-file-section-2-container d-flex align-items-center">
                        
                        <div className="container" style={{width: '100%', height: '100%'}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <img className="__add-file-section-2-img d-flex align-items-center" src={addFileIcon} alt=""/>
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="__add-file-section-2-text-1">Add your files</div>
                                    <div className="__add-file-section-2-text-2">Up to 5 GB</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default AddFile;