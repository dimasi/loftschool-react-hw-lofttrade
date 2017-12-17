import {createActions} from 'redux-actions';

const actionCreators = createActions({
  FETCH: {
    WALLET: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined
    }
  }
});

export const fetchWalletRequest = actionCreators.fetch.wallet.request;
export const fetchWalletSuccess = actionCreators.fetch.wallet.success;
export const fetchWalletFailure = actionCreators.fetch.wallet.failure;
