import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        {' '}
        <Link to="/logIn"> {this.props.title}</Link>
      </header>
    );
  }
}

export default Header;
