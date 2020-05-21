import React from 'react';
import addFilesIcon from './../../assets/img/add-files.svg';
import './ListFiles.scss';

/**
 * Scroll bar Samples: https://bootstrapious.com/p/bootstrap-scrollbar
 */
interface IProps {
}

interface IState {
    files: Array<{
        name: String,
        size: String
    }>
}

class ListFiles extends React.Component<IProps, IState> {
    constructor(props: IProps) {
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
            <div className="row">
                {this.state.files.map((file, index) => 
                    <div className="col-md-12">
                        <span className="__item-file-name">{file.name}</span>
                        <span className="__item-file-size">{file.size}</span>

                        <div className="__line-separator"></div>
                    </div>
                )}
            </div>
        );
    }

    render() {
        return(
            <div className="__list-files-container">

                <div className="col-md-12 __list-files-section-1">
                    <div className="container" style={{width: '100%', height: '100%'}}>
                        {this.getFileList()}
                    </div>
                </div>

                <div className="col-md-12 __list-files-section-2">
                    <div className="container" style={{width: '100%', height: '100%', paddingLeft: 0}}>

                        <div className="row">
                            <div className="col-md-12 __add-file-text-1">
                                <img className="__add-file-icon" src={addFilesIcon} alt="Add more files"/>
                                Add more files 
                                <span className="__add-file-text-2">3 files added - 2 GB left</span>
                            </div>
                        </div>
                    
                    </div>
                </div>

                <div className="col-md-12 d-flex align-items-center  __list-files-section-3">
                        <input type="button" className="__btn-create-link" value="Next"/>
                </div>

            </div>
        );
    }
}

export default ListFiles;