import React from 'react';
import NavBar from './NavBar';
import './Header.scss';

interface Props {}
interface State {}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
        <NavBar />
    );
  }
}

export default Header;