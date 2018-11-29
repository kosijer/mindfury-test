import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

// eslint-disable-next-line arrow-body-style
const InfoCard = ({ name, myAmount, localCurrency, rate, usdToGbp }) => {
  return (
    <div className={styles.infoCard}>
      <h4>
        {((myAmount * rate) / usdToGbp).toFixed(2)} {localCurrency}
      </h4>
      <span>in {name}</span>
      <p>
        1 {name} = {rate / usdToGbp} {localCurrency}
        <br />1 {localCurrency} = {1 / (rate * usdToGbp)} {name}
      </p>
    </div>
  );
};

InfoCard.propTypes = {
  name: PropTypes.string,
  myAmount: PropTypes.number,
  localCurrency: PropTypes.string,
  rate: PropTypes.number,
  usdToGbp: PropTypes.number,
};

export default InfoCard;
