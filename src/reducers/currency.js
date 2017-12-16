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

export default combineReducers({
  selected,
  offset,
  btc,
  eth,
  isBtcLoading,
  isEthLoading
});

export const getOffset = state => state.currency.offset;
export const getSelected = state => state.currency.selected;
export const getIsBtcLoading = state => state.currency.isBtcLoading;
export const getIsEthLoading = state => state.currency.isEthLoading;
export const getBtc = state => state.currency.btc;
export const getEth = state => state.currency.eth;
