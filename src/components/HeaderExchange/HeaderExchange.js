import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {
  getSelected,
  getBtc,
  getEth
} from 'reducers/currency';
import {
  selectBtc, 
  selectEth
} from 'actions/currency';
import './HeaderExchange.css';

class HeaderExchange extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {btc, eth} = nextProps;

    return btc.length && eth.length;
  }

  handleBtcClick = () => {
    const {
      selected,
      selectBtc
    } = this.props;

    if (selected !== 'btc') {
      selectBtc();
    }
  }

  handleEthClick = () => {
    const {
      selected,
      selectEth
    } = this.props;

    if (selected !== 'eth') {
      selectEth();
    }
  }

  renderBtc = () => {
    const {selected, btc} = this.props;
    const sell = btc.length ? btc[0].sell.toFixed(2) : '';
    const itemClasses = cx(
      'HeaderExchange__item',
      {'HeaderExchange__item_active': selected === 'btc'}
    )

    return (
      <dl className={itemClasses} onClick={this.handleBtcClick}>
        <dt className="HeaderExchange__item-title">1 BTC</dt>
        <dd className="HeaderExchange__item-value">{sell}</dd>
      </dl>
    );
  }

  renderEth = () => {
    const {selected, eth} = this.props;
    const sell = eth.length ? eth[0].sell.toFixed(2) : '';
    const itemClasses = cx(
      'HeaderExchange__item',
      {'HeaderExchange__item_active': selected === 'eth'}
    )

    return (
      <dl className={itemClasses} onClick={this.handleEthClick}>
        <dt className="HeaderExchange__item-title">1 ETH</dt>
        <dd className="HeaderExchange__item-value">{sell}</dd>
      </dl>
    );
  }

  render() {
    return (
      <div className="HeaderExchange">
        {this.renderBtc()}
        {this.renderEth()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: getSelected(state),
  btc: getBtc(state),
  eth: getEth(state)
});

const mapDispatchToProps = {
  selectBtc,
  selectEth
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderExchange);
