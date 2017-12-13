import React, { PureComponent } from 'react';
import Score from 'Components/Score';
import Chart from 'Components/Chart';
import History from 'Components/History';
import './Trade.css';

export default class Trade extends PureComponent {
  render() {
    return (
      <div className="Trade">
        <div className="Trade__left">
          <div className="Trade__score">
            <Score />
          </div>
          <div className="Trade__exchange">
            <section className="exchange">
              <h4 className="section-heading">Покупка/продажа</h4>
            </section>
          </div>
        </div>
        <div className="Trade__right">
          <div className="Trade__chart">
            <Chart />
          </div>
          <section className="Trade__history">
            <History />
          </section>
        </div>
      </div>
    );
  }
}
