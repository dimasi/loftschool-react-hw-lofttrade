import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
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

export class HeaderExchange extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const {btc, eth} = nextProps;
    return btc.length && eth.length;
  }

  renderBtc = () => {
    const {btc} = this.props;
    const sell = btc.length ? btc[0].sell.toFixed(2) : '';

    return (
      <NavLink 
        className="HeaderExchange__item"
        activeClassName="HeaderExchange__item_active"
        to="/trade/btc"
        exact
      >
        <span className="HeaderExchange__item-title">1 BTC</span>
        <span className="HeaderExchange__item-value">{sell}</span>
      </NavLink>
    );
  }

  renderEth = () => {
    const {eth} = this.props;
    const sell = eth.length ? eth[0].sell.toFixed(2) : '';

    return (
      <NavLink 
        className="HeaderExchange__item"
        activeClassName="HeaderExchange__item_active"
        to="/trade/eth"
        exact
      >
        <span className="HeaderExchange__item-title">1 ETH</span>
        <span className="HeaderExchange__item-value">{sell}</span>
      </NavLink>
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderExchange)
);
