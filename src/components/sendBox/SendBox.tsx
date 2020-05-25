import React from 'react';
import './SendBox.scss';
import AddFile from './AddFile';

interface Props {
    internalComponent?: JSX.Element
}
interface State {
    internalComponent: JSX.Element
}

class SendBox extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            internalComponent: this.props.internalComponent || <AddFile />
        };
    }

    render() {
        return (
            <div className="__sendbox">
                {this.state.internalComponent}
            </div>
        );
    }
}

export default SendBox;