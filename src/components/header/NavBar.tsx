import React from 'react';
import { Navbar } from 'react-bootstrap';
import sendLogo from './../../assets/img/send-logo.svg';
import './NavBar.scss';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar className="__navbar-logo">
                <Navbar.Brand href="#">
                <img
                    alt=""
                    src={sendLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top logo __logo"
                />{' '}
                <span className="__title-0">Internxt</span> <span className="__title-1">send</span>
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavBar;