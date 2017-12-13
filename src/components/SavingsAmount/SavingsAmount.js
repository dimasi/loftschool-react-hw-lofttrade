import React, { PureComponent } from 'react';
import './SavingsAmount.css';

class SavingsAmount extends PureComponent {
  render() {
    const {savings} = this.props;

    return (
      <dl className="SavingsAmount">
        <dt className="SavingsAmount__title">Сумма накоплений:</dt>
        <dd className="SavingsAmount__value">{`~ ${savings} $`}</dd>
      </dl>
    );
  }
}

export default SavingsAmount;
