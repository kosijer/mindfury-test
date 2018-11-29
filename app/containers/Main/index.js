import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login';
import Dashboard from '../Dashboard';

export class Main extends React.Component {
  static states = { authenticated: false };

  constructor(props) {
    super(props);
    this.state = { authenticated: this.props.authenticated };
  }

  handleClick = () => {
    this.setState({ authenticated: !this.state.authenticated });
  };

  render() {
    return (
      <div>
        {this.state.authenticated ? (
          <Dashboard />
        ) : (
          <Login
            authenticated={this.state.authenticated}
            onpress={this.handleClick}
          />
        )}
      </div>
    );
  }
}

Main.propTypes = {
  authenticated: PropTypes.bool,
};

export default Main;
