import React from 'react';
import { Navbar, Image } from 'react-bootstrap';
import sendLogo from './../../assets/img/send-logo.svg';
import './NavBar.scss';

interface Props {}
interface State {}

class NavBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Navbar className="__navbar-logo">
                <Navbar.Brand href="#">
                    <Image
                        alt="Internxt send"
                        src={sendLogo}
                        className="d-inline-block align-top logo __logo"
                    />{' '}

                    <span className="__title-0">Internxt</span> <span className="__title-1">send</span>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavBar;