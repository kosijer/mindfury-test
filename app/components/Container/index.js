import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

// eslint-disable-next-line arrow-body-style
const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
