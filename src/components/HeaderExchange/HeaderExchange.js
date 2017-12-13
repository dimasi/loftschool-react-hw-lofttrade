import React, { PureComponent } from 'react';
import './HeaderExchange.css';

export default class HeaderExchange extends PureComponent {
  render() {
    return (
      <div className="HeaderExchange">
        <dl className="HeaderExchange__item">
          <dt className="HeaderExchange__item-title">1 BTC</dt>
          <dd className="HeaderExchange__item-value">4 277.5</dd>
        </dl>
        <dl className="HeaderExchange__item">
          <dt className="HeaderExchange__item-title">1 ETH</dt>
          <dd className="HeaderExchange__item-value">290</dd>
        </dl>
      </div>
    );
  }
}
