import React from 'react';
import './SendBox.scss';
import AddFile from './AddFile';
import ListFiles from './ListFiles';
import DownloadByPassword from './DownloadByPassword';
import DownloadFile from './DownloadFile';
import LinkSettings from './LinkSettings';
import UploadFile from './UploadFile';
import LinkDetails from './LinkDetails';
import FileDownloaded from './FileDownloaded';

interface Props {}
interface State {}

class SendBox extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="__sendbox">
                {/* <AddFile /> */}
                {/* <ListFiles /> */}
                {/* <DownloadByPassword /> */}
                {/* <DownloadFile files={4} size={{quantity: 2, mesure: 'MB'}} /> */}
                {/* <FileDownloaded /> */}
                {/* <LinkSettings /> */}
                <UploadFile />
                {/* <LinkDetails link='https://send.internxt.com/3adr42d' /> */}
            </div>
        );
    }
}

export default SendBox;