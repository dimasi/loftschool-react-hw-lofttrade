import React, { PureComponent } from 'react';
import SectionHeading from 'Components/SectionHeading'
import './Score.css';

class Score extends PureComponent {
  render() {
    return (
      <section className="Score">
        <SectionHeading>Ваш счет</SectionHeading>
        <dl className="Score__item">
          <dt className="Score__item-title">ETH</dt>
          <dd className="Score__item-value">
            <span className="Score__item-value-dec">12</span>
            <span className="Score__item-value-del">.</span>
            <span className="Score__item-value-frac">12332</span>
          </dd>
        </dl>
        <dl className="Score__item">
          <dt className="Score__item-title">BTC</dt>
          <dd className="Score__item-value">
            <span className="Score__item-value-dec">1</span>
            <span className="Score__item-value-del">.</span>
            <span className="Score__item-value-frac">234032</span>
          </dd>
        </dl>
        <dl className="Score__item">
          <dt className="Score__item-title">$</dt>
          <dd className="Score__item-value">
            <span className="Score__item-value-dec">1 123</span>
            <span className="Score__item-value-del">.</span>
            <span className="Score__item-value-frac">00</span>
          </dd>
        </dl>
      </section>
    );
  }
};

export default Score;
