import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getCoins} from 'reducers/wallet';
import SectionHeading from 'components/SectionHeading'
import './Wallet.css';

export class Wallet extends PureComponent {
  renderEth = () => {
    const {coins: {eth}} = this.props;
    const [dec, frac] = eth.toString().split('.');

    return (
      <dl className="Wallet__item">
        <dt className="Wallet__item-title">ETH</dt>
        <dd className="Wallet__item-value">
          <span className="Wallet__item-value-dec">{dec}</span>
          {this.renderFrac(frac)}
        </dd>
      </dl>
    );
  }
  
  renderBtc = () => {
    const {coins: {btc}} = this.props;
    const [dec, frac] = btc.toString().split('.');

    return (
      <dl className="Wallet__item">
        <dt className="Wallet__item-title">BTC</dt>
        <dd className="Wallet__item-value">
          <span className="Wallet__item-value-dec">{dec}</span>
          {this.renderFrac(frac)}
        </dd>
      </dl>
    );
  }
  
  renderUsd = () => {
    const {coins: {usd}} = this.props;
    const [dec, frac] = usd.toString().split('.');

    return (
      <dl className="Wallet__item">
        <dt className="Wallet__item-title">$</dt>
        <dd className="Wallet__item-value">
          <span className="Wallet__item-value-dec">{dec}</span>
          {this.renderFrac(frac)}
        </dd>
      </dl>
    );
  }

  renderFrac = (frac) => {
    if (frac) {
      return (
        <span>
          <span className="Wallet__item-value-del">.</span>
          <span className="Wallet__item-value-frac">{frac}</span>
        </span>
      );
    }
  }

  render() {
    return (
      <section className="Wallet">
        <SectionHeading>Ваш счет</SectionHeading>
        {this.renderEth()}
        {this.renderBtc()}
        {this.renderUsd()}
      </section>
    );
  }
};

const mapStateToProps = state => ({
  coins: getCoins(state)
});

export default connect(mapStateToProps)(Wallet);
