import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.scss';

interface Props {}
interface State {
  baseUrl: String
}

class Footer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      baseUrl: 'https://internxt.com'
    }
  }

  render() {
    return (
        <Nav>
          <Nav.Item>
            <Nav.Link className="__footer-text" href={`${this.state.baseUrl}`}>
              Internxt
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="__footer-text" href={`${this.state.baseUrl}/privacy`}>
              Privacy
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="__footer-text" href={`${this.state.baseUrl}/terms`}>
              Terms
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link className="__footer-text" href="mailto:hello@internxt.com">
              Contact us
            </Nav.Link>
          </Nav.Item>
        </Nav>
    );
  }
}

export default Footer;