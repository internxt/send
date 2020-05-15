import React from 'react';
import './SendBox.scss';
import AddFile from './AddFile';
import ListFiles from './ListFiles';
import DownloadByPassword from './DownloadByPassword';
// import DownloadFile from './DownloadFile';
import LinkSettings from './LinkSettings';

class SendBox extends React.Component {
    render() {
        return (
            <div className="__sendbox">
                {/* <AddFile /> */}
                {/* <ListFiles /> */}
                {/* <DownloadByPassword /> */}
                {/* <DownloadFile /> */}
                <LinkSettings />
            </div>
        );
    }
}

export default SendBox;