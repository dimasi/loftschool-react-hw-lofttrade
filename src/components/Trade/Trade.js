import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
  getSelected
} from 'reducers/currency';
import {
  selectBtc, 
  selectEth
} from 'actions/currency';
import Wallet from 'components/Wallet';
import Chart from 'components/Chart';
import History from 'components/History';
import TradeOperations from 'components/TradeOperations';
import './Trade.css';

export class Trade extends PureComponent {
  componentDidMount() {
    this.selectCurrency();
  }

  componentDidUpdate(prevProps, prevState) {
    this.selectCurrency();
  }

  selectCurrency = () => {
    const {
      selectBtc,
      selectEth
    } = this.props;
    
    if (this.props.match.params.cur === "eth") {
      selectEth();
    } else {
      selectBtc();
    }
  }

  render() {
    return (
      <div className="Trade">
        <div className="Trade__left">
          <div className="Trade__score">
            <Wallet />
          </div>
          <div className="Trade__exchange">
            <div className="exchange">
              <TradeOperations />
            </div>
          </div>
        </div>
        <div className="Trade__right">
          <div className="Trade__chart">
            <Chart />
          </div>
          <div className="Trade__history">
            <History />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selected: getSelected(state)
});

const mapDispatchToProps = {
  selectBtc,
  selectEth
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Trade)
);
