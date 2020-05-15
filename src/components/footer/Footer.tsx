import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
        <Nav>
          <Nav.Item>
            <Nav.Link className="__footer-text" href="https://internxt.com">Internxt</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="__footer-text" href="https://internxt.com/privacy">Privacy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="__footer-text" href="https://internxt.com/terms">Terms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="__footer-text" href="mailto:hello@internxt.com">Contact us</Nav.Link>
          </Nav.Item>
        </Nav>
    );
  }
}

export default Footer;