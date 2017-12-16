import {createActions} from "redux-actions";

const actionCreators = createActions({
  CURRENCY: {
    SELECT: {
      BTC: undefined,
      ETH: undefined,
      OFFSET: undefined
    },
    FETCH: {
      BTC: {
        REQUEST: undefined,
        SUCCESS: undefined,
        FAILURE: undefined
      },
      ETH: {
        REQUEST: undefined,
        SUCCESS: undefined,
        FAILURE: undefined
      }
    }
  }
});

export const selectBtc = actionCreators.currency.select.btc;
export const selectEth = actionCreators.currency.select.eth;
export const selectOffset = actionCreators.currency.select.offset;

export const fetchBtcRequest = actionCreators.currency.fetch.btc.request;
export const fetchBtcSuccess = actionCreators.currency.fetch.btc.success;
export const fetchBtcFailure = actionCreators.currency.fetch.btc.failure;

export const fetchEthRequest = actionCreators.currency.fetch.eth.request;
export const fetchEthSuccess = actionCreators.currency.fetch.eth.success;
export const fetchEthFailure = actionCreators.currency.fetch.eth.failure;
