import React from 'react';
import './SendBox.scss';
import AddFile from './AddFile';
import ListFiles from './ListFiles';
import DownloadByPassword from './DownloadByPassword';
import DownloadFile from './DownloadFile';
import LinkSettings from './LinkSettings';
import UploadFile from './UploadFile';
import LinkDetails from './LinkDetails';

class SendBox extends React.Component {
    render() {
        return (
            <div className="__sendbox">
                {/* <AddFile /> */}
                {/* <ListFiles /> */}
                <DownloadByPassword />
                {/* <DownloadFile /> */}
                {/* <LinkSettings /> */}
                {/* <UploadFile /> */}
                {/* <LinkDetails link='https://send.internxt.com/3adr42d' /> */}
            </div>
        );
    }
}

export default SendBox;