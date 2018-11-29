import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import styles from './styles.scss';

export class Login extends React.Component {
  static propTypes = {
    onpress: PropTypes.func,
  };

  render() {
    return (
      <Container align="center">
        <div className={styles.form}>
          <input type="text" placeholder="Enter your username" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="button" onClick={this.props.onpress}>
            Login
          </button>
          <Link to={{ hash: '#' }}>Reset your password</Link>
        </div>
      </Container>
    );
  }
}

export default Login;
