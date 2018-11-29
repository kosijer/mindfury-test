/* eslint-disable no-unused-expressions */
import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSyncAlt,
  faToggleOn,
  faToggleOff,
} from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../../components/InfoCard';
import styles from './styles.scss';
import Container from '../../components/Container';

export class Dashboard extends React.Component {
  state = {
    currencyConerterUrl:
      'https://free.currencyconverterapi.com/api/v6/convert?q=USD_GBP',
    conversionRate: undefined,
    usdToGbp: undefined,
    currencies: {
      bitcoin: {
        url: 'https://api.coincap.io/v2/assets/bitcoin',
        name: 'BitCoins',
        mine: 10,
      },
      ethereum: {
        url: 'https://api.coincap.io/v2/assets/ethereum',
        name: 'Ethereums',
        mine: 20,
      },
    },
    bitCoinRate: undefined,
    ethereumRate: undefined,
    localCurrency: 'GBP',
  };

  toggleCurrency = () => {
    const currentRate = this.state.usdToGbp;
    this.state.localCurrency === 'GBP'
      ? this.setState({ localCurrency: 'USD', conversionRate: 1 })
      : this.setState({ localCurrency: 'GBP', conversionRate: currentRate });
  };

  getData = () => {
    axios
      .get(this.state.currencyConerterUrl)
      .then(res => {
        this.setState({
          usdToGbp: res.data.results.USD_GBP.val,
          conversionRate: res.data.results.USD_GBP.val,
          localCurrency: 'GBP',
        });
      })
      .catch(err => console.error(err));

    axios
      .get(this.state.currencies.bitcoin.url)
      .then(res => {
        this.setState({ bitCoinRate: res.data.data.priceUsd });
      })
      .catch(err => console.error(err));

    axios
      .get(this.state.currencies.ethereum.url)
      .then(res => {
        this.setState({ ethereumRate: res.data.data.priceUsd });
      })
      .catch(err => console.error(err));
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <Container align="center">
        <div className={styles.myCurrency}>
          <div>Your current status</div>
          <div>
            {this.state.currencies.bitcoin.name}:
            <span>{this.state.currencies.bitcoin.mine}</span>
          </div>
          <div>
            {this.state.currencies.ethereum.name}:
            <span>{this.state.currencies.ethereum.mine}</span>
          </div>
          <div
            className={styles.refresh}
            onClick={this.getData}
            role="button"
            onKeyDown={this.handleKeyPress}
          >
            <FontAwesomeIcon icon={faSyncAlt} />
          </div>
        </div>
        <div className={styles.stats}>
          <InfoCard
            name={this.state.currencies.bitcoin.name}
            myAmount={this.state.currencies.bitcoin.mine}
            localCurrency={this.state.localCurrency}
            rate={this.state.bitCoinRate}
            usdToGbp={this.state.conversionRate}
          />
          <InfoCard
            name={this.state.currencies.ethereum.name}
            myAmount={this.state.currencies.ethereum.mine}
            localCurrency={this.state.localCurrency}
            rate={this.state.ethereumRate}
            usdToGbp={this.state.conversionRate}
          />
        </div>
        <button
          type="button"
          onClick={this.toggleCurrency}
          className={styles.switchButton}
        >
          <FontAwesomeIcon
            icon={this.state.localCurrency === 'GBP' ? faToggleOn : faToggleOff}
          />
          {this.state.localCurrency === 'GBP'
            ? 'Switch to USD'
            : 'Switch to GBP'}
        </button>
      </Container>
    );
  }
}

export default Dashboard;
