import {
  selectBtc,
  selectEth,
  selectOffset,
  fetchBtcRequest,
  fetchBtcSuccess,
  fetchBtcFailure,
  fetchEthRequest,
  fetchEthSuccess,
  fetchEthFailure
} from 'actions/currency';
import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

export const selected = handleActions(
  {
    [selectBtc]: () => 'btc',
    [selectEth]: () => 'eth'
  },
  'btc'
);

export const offset = handleActions(
  {
    [selectOffset]: (state, action) => action.payload
  },
  '4h'
);

export const btc = handleActions(
  {
    [fetchBtcRequest]: () => [],
    [fetchBtcSuccess]: (state, action) => action.payload,
    [fetchBtcFailure]: (state, action) => action.error
  },
  []
);

export const eth = handleActions(
  {
    [fetchEthRequest]: () => [],
    [fetchEthSuccess]: (state, action) => action.payload,
    [fetchEthFailure]: (state, action) => action.error
  },
  []
);

export const isBtcLoading = handleActions(
  {
    [fetchBtcRequest]: () => true,
    [fetchBtcSuccess]: () => false,
    [fetchBtcFailure]: () => false
  },
  false
);

export const isEthLoading = handleActions(
  {
    [fetchEthRequest]: () => true,
    [fetchEthSuccess]: () => false,
    [fetchEthFailure]: () => false
  },
  false
);

export const btcPurchase = handleActions(
  {
    [fetchBtcSuccess]: (state, action) => action.payload[0].purchase
  },
  0
);

export const btcSell = handleActions(
  {
    [fetchBtcSuccess]: (state, action) => action.payload[0].sell
  },
  0
);

export const ethPurchase = handleActions(
  {
    [fetchEthSuccess]: (state, action) => action.payload[0].purchase
  },
  0
);

export const ethSell = handleActions(
  {
    [fetchEthSuccess]: (state, action) => action.payload[0].sell
  },
  0
);

export default combineReducers({
  selected,
  offset,
  btc,
  eth,
  isBtcLoading,
  isEthLoading,
  btcPurchase,
  btcSell,
  ethPurchase,
  ethSell
});

export const getOffset = state => state.currency.offset;
export const getSelected = state => state.currency.selected;
export const getIsBtcLoading = state => state.currency.isBtcLoading;
export const getIsEthLoading = state => state.currency.isEthLoading;
export const getBtc = state => state.currency.btc;
export const getEth = state => state.currency.eth;
export const getCurrentBtcPurchase = state => state.currency.btcPurchase;
export const getCurrentBtcSell = state => state.currency.btcSell;
export const getCurrentEthPurchase = state => state.currency.ethPurchase;
export const getCurrentEthSell = state => state.currency.ethSell;
