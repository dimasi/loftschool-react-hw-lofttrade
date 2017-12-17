import React, {PureComponent} from 'react';
import {
  compose, 
  withProps, 
  mapProps
} from 'recompose';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  getCurrentBtcSell,
  getCurrentEthSell,
  getCurrentBtcPurchase,
  getCurrentEthPurchase,
} from 'reducers/currency';
import {
  buyCurrencyRequest, 
  sellCurrencyRequest
} from 'actions/currency';
import {getError} from 'reducers/wallet';
import SectionHeading from 'components/SectionHeading';
import './TradeOperations.css';

const enhance = compose(
  withRouter,
  connect(
    state => ({
      currentBtcPurchase: getCurrentBtcPurchase(state),
      currentBtcSell: getCurrentBtcSell(state),
      currentEthPurchase: getCurrentEthPurchase(state),
      currentEthSell: getCurrentEthSell(state),
      error: getError(state),
    }),
    {
      buyCurrencyRequest,
      sellCurrencyRequest,
    },
  ),
  withProps(({location}) => ({
    currencyName: location.pathname.includes('btc') ? 'btc' : 'eth'
  })),
  mapProps(
    ({
      buyCurrencyRequest,
      sellCurrencyRequest,
      currencyName,
      currentBtcPurchase,
      currentBtcSell,
      currentEthPurchase,
      currentEthSell,
      error,
    }) => ({
      currencyName,
      buyCurrencyRequest,
      sellCurrencyRequest,
      error,
      sell: currencyName === 'btc' ? 
        currentBtcSell : currentEthSell,
      purchase: currencyName === 'btc' ? 
        currentBtcPurchase : currentEthPurchase,
    }),
  ),
);

export class TradeOperations extends PureComponent {
  state = {
    inputFiat: 1,
    inputSell: this.props.sell,
    inputPurchase: this.props.purchase,
    currentInput: 'inputFiat',
  };

  componentWillReceiveProps(nextProps) {
    const {sell, purchase} = nextProps;
    const {currentInput} = this.state;
    this.changeInputs(currentInput, sell, purchase);
  }

  handleChange = event => {
    const {name, value} = event.target;
    const {sell, purchase} = this.props;

    this.setState(state => ({[name]: value}));
    if (isNaN(event.target.value) || event.target.value === '') return;
    else this.changeInputs(event.target.name, sell, purchase);
  };

  handleBlur = () => {
    this.setState({currentInput: 'inputFiat'});
  };

  handleFocus = event => {
    this.setState({currentInput: event.target.name});
  };

  handleSell = event => {
    const {currencyName} = this.props;
    const {inputFiat} = this.state;
    this.props.sellCurrencyRequest({currencyName, value: inputFiat});
  };

  handleBuy = event => {
    const {currencyName} = this.props;
    const {inputFiat} = this.state;
    this.props.buyCurrencyRequest({currencyName, value: inputFiat});
  };

  changeInputs(name, sell, purchase) {
    switch (name) {
      case 'inputFiat': {
        this.setState(({inputFiat}) => {
          const parsed = isNaN(inputFiat) ? 0 : parseFloat(inputFiat);
          return {
            inputSell: parsed * sell,
            inputPurchase: parsed * purchase,
          };
        });
        break;
      }
      
      case 'inputSell':
        this.setState(({inputSell}) => {
          const parsedSell = isNaN(inputSell) ? 0 : parseFloat(inputSell);
          const nextFiat = parsedSell / sell;
          return {
            inputFiat: nextFiat,
            inputPurchase: nextFiat * purchase,
          };
        });
        break;

      case 'inputPurchase':
        this.setState(({inputPurchase}) => {
          const parsedPurchase =
            isNaN(inputPurchase) ? 0 : parseFloat(inputPurchase);
          const nextFiat = parsedPurchase / purchase;

          return {
            inputFiat: nextFiat,
            inputSell: nextFiat * sell,
          };
        });
        break;

      default:
        break;
    }
  }

  render() {
    const {
      error, 
      currencyName
    } = this.props;
    const {
      inputFiat, 
      inputSell, 
      inputPurchase
    } = this.state;

    return (
      <section className="TradeOperations">
        <SectionHeading>Покупка/продажа</SectionHeading>
        <div className="TradeOperations__row">
          <div className="TradeOperations__textfield">
            <input 
              className="TradeOperations__textfield-control" 
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              name="inputFiat"
              value={inputFiat}
            />
            <span className="TradeOperations__textfield-label">
              {currencyName}
            </span>
          </div>
        </div>
        <div className="TradeOperations__row">
          <div className="TradeOperations__textfield">
            <input 
              className="TradeOperations__textfield-control" 
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              name="inputPurchase"
              value={inputPurchase}
              readOnly
            />
            <span className="TradeOperations__textfield-label">$</span>
          </div>
          <button 
            className="TradeOperations__btn TradeOperations__btn_sale"
            onClick={this.handleSell}
          >
            Продать
          </button>
        </div>
        <div className="TradeOperations__row">
          <div className="TradeOperations__textfield">
            <input 
              className="TradeOperations__textfield-control" 
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              name="inputSell"
              value={inputSell}
              readOnly
            />
            <span className="TradeOperations__textfield-label">$</span>
          </div>
          <button 
            className="TradeOperations__btn TradeOperations__btn_purchase"
            onClick={this.handleBuy}
          >
            Купить
          </button>
        </div>
        {error && <p className="TradeOperations__error-msg">{error}</p>}
      </section>
    );
  }
};

export default enhance(TradeOperations);
