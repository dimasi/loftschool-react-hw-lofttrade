import {
  put,
  call,
  fork
} from "redux-saga/effects";
import {
  sellCurrency,
  buyCurrency,
  getWallet
} from "api";
import {
  fetchWalletSuccess,
  fetchWalletFailure
} from "actions/wallet";
import {
  fetchBtcRequest,
  fetchEthRequest,
  sellCurrencyRequest,
  sellCurrencySuccess,
  sellCurrencyFailure,
  buyCurrencyRequest,
  buyCurrencySuccess,
  buyCurrencyFailure
} from "actions/currency";
import {
  fetchWalletFlow,
  sellCurrencyFlow,
  buyCurrencyFlow
} from './../wallet';

describe('Сага fetchWalletFlow', () => {
  describe('Без ошибок', () => {
    const saga = fetchWalletFlow();
  
    it('call getWallet', () => {
      expect(saga.next().value).toEqual(call(getWallet));
    });
  
    it('put fetchWalletSuccess с передачей response.data.result', () => {
      const response = {
        data: {
          result: 'test'
        }
      }
  
      expect(saga.next(response).value).toEqual(
        put(fetchWalletSuccess(response.data.result))
      );
    });
  });

  describe('С ошибками', () => {
    const saga = fetchWalletFlow();
    const error = new Error('test error');

    it('put fetchWalletFailure с передачей ошибки', () => {
      saga.next();
      expect(saga.throw(error).value).toEqual(put(fetchWalletFailure(error)));
    });
  });
});

describe('Сага sellCurrencyFlow', () => {
  const action = {
    type: sellCurrencyRequest,
    payload: {
      currencyName: 'btc',
      value: 1
    }
  }

  describe('Без ошибок', () => {
    const saga = sellCurrencyFlow(action);

    it('call sellCurrency с передачей currencyName и value', () => {
      expect(saga.next().value).toEqual(
        call(
          sellCurrency,
          action.payload.currencyName,
          action.payload.value
        )
      );
    });

    it('put sellCurrencySuccess с передачей response.data', () => {
      const response = {
        data: 'test'
      }
      expect(saga.next(response).value).toEqual(
        put(sellCurrencySuccess(response.data))
      );
    });

    it('fork fetchWalletFlow', () => {
      expect(saga.next().value).toEqual(fork(fetchWalletFlow));
    });
  });

  describe('С ошибками', () => {
    const saga = sellCurrencyFlow(action);
    const error = new Error('test error');

    it('put sellCurrencyFailure с передачей ошибки', () => {
      saga.next();
      expect(saga.throw(error).value).toEqual(put(sellCurrencyFailure(error)));
    });
  });
});

describe('Сага buyCurrencyFlow', () => {
  const action = {
    type: buyCurrencyFlow,
    payload: {
      currencyName: 'btc',
      value: 1
    }
  }

  describe('Без ошибок', () => {
    const saga = buyCurrencyFlow(action);

    it('call buyCurrency с передачей currencyName и value', () => {
      expect(saga.next().value).toEqual(
        call(
          buyCurrency,
          action.payload.currencyName,
          action.payload.value
        )
      );
    });

    it('put buyCurrencySuccess с передачей response.data', () => {
      const response = {
        data: 'test'
      }
      expect(saga.next(response).value).toEqual(
        put(buyCurrencySuccess(response.data))
      );
    });

    it('fork fetchWalletFlow', () => {
      expect(saga.next().value).toEqual(fork(fetchWalletFlow));
    });
  });

  describe('С ошибками', () => {
    const saga = buyCurrencyFlow(action);
    const error = new Error('test error');

    it('put sellCurrencyFailure с передачей ошибки', () => {
      saga.next();
      expect(saga.throw(error).value).toEqual(put(buyCurrencyFailure(error)));
    });
  });
});
