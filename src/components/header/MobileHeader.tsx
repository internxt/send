import React from 'react';
import './MobileHeader.scss';
import { Navbar, Image } from 'react-bootstrap';
import sendMobileLogo from './../../assets/img/send-logo-mobile.svg';

interface Props {}
interface State {}

class MobileHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <Navbar className="__navbar-logo-mobile">
                <Navbar.Brand href="#">
                    <Image
                        alt="Internxt send"
                        src={sendMobileLogo}
                        className="d-inline-block align-top logo __logo"
                    />{' '}

                    <span className="__title-0-mobile">Internxt</span> <span className="__title-1-mobile">send</span>
                </Navbar.Brand>
            </Navbar>
    );
  }
}

export default MobileHeader;