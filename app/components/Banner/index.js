/* eslint-disable arrow-body-style */
import React from 'react';

import banner from './mindfury-banner.png';
import styles from './styles.scss';

const Banner = () => {
  return (
    <img
      className={styles.banner}
      src={banner}
      alt="Mindfury - Bitcoin and Smartcache Management System"
    />
  );
};

export default Banner;
