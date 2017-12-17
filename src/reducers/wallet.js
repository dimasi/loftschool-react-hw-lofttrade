import {combineReducers} from "redux";
import {handleActions} from "redux-actions";
import {
  fetchWalletRequest,
  fetchWalletSuccess,
  fetchWalletFailure
} from "actions/wallet";
import {
  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure,
  sellCurrencyRequest,
  sellCurrencySuccess,
  sellCurrencyFailure
} from "actions/currency";

export const isLoading = handleActions(
  {
    [fetchWalletRequest]: () => true,
    [fetchWalletSuccess]: () => false,
    [fetchWalletFailure]: () => false
  },
  false
);

export const usd = handleActions(
  {
    [fetchWalletSuccess]: (state, action) => action.payload.usd
  },
  0
);

export const btc = handleActions(
  {
    [fetchWalletSuccess]: (state, action) => action.payload.btc
  },
  0
);

export const eth = handleActions(
  {
    [fetchWalletSuccess]: (state, action) => action.payload.eth
  },
  0
);

export const error = handleActions(
  {
    [buyCurrencyRequest]: () => null,
    [buyCurrencySuccess]: () => null,
    [buyCurrencyFailure]: (state, action) => action.payload,
    [sellCurrencyRequest]: () => null,
    [sellCurrencySuccess]: () => null,
    [sellCurrencyFailure]: (state, action) => action.payload
  },
  null
);

const coins = combineReducers({
  usd,
  btc,
  eth
});

export default combineReducers({
  isLoading,
  coins,
  error
});

export const getCoins = state => state.wallet.coins;
export const getError = state => state.wallet.error;
