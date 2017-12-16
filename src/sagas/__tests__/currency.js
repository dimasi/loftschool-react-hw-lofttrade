import {delay} from 'redux-saga';
import {
  takeLatest,
  fork,
  take,
  select,
  put,
  cancel,
  call
} from 'redux-saga/effects';
import {candles} from 'api';
import {
  loginSuccess, 
  logout
} from 'actions/auth';
import {getOffset} from 'reducers/currency';
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
import {
  fetchCurrencyFlow, 
  fetchBtcFlow, 
  fetchEthFlow, 
  fetchCurrencyWatch
} from './../currency';

describe('Сага fetchCurrencyFlow', () => {
  const saga = fetchCurrencyFlow();
  const offset = '4h';

  it('select getOffset', () => {
    expect(saga.next().value).toEqual(select(getOffset));
  });

  it('put fetchBtcRequest с передачей offset', () => {
    expect(saga.next(offset).value).toEqual(put(fetchBtcRequest(offset)));
  });

  it('put fetchEthRequest с передачей offset', () => {
    expect(saga.next(offset).value).toEqual(put(fetchEthRequest(offset)));
  });
});

describe('Сага fetchBtcFlow', () => {
  describe('Без ошибок', () => {
    const action = {
      payload: '4h'
    };
    const response = {
      data: {
        result: 'test'
      }
    }
    const saga = fetchBtcFlow(action);

    it('call candles с передачей offset в action.payload', () => {
      expect(saga.next().value).toEqual(
        call(candles, 'btc', action.payload)
      );
    });

    it('put fetchBtcSuccess', () => {
      expect(saga.next(response).value).toEqual(
        put(fetchBtcSuccess(response.data.result))
      );
    });
  });

  describe('С ошибками', () => {
    const action = {
      payload: '4h'
    };
    const error = new Error('test error');
    const saga = fetchBtcFlow(action);
    
    it('put с передачей ошибки', () => {
      saga.next();
      expect(saga.throw(error).value).toEqual(put(fetchBtcFailure(error)));
    });
  });
});

describe('Сага fetchEthFlow', () => {
  describe('Без ошибок', () => {
    const action = {
      payload: '4h'
    };
    const response = {
      data: {
        result: 'test'
      }
    }
    const saga = fetchEthFlow(action);

    it('call candles с передачей offset в action.payload', () => {
      expect(saga.next().value).toEqual(
        call(candles, 'eth', action.payload)
      );
    });

    it('put fetchEthSuccess', () => {
      expect(saga.next(response).value).toEqual(
        put(fetchEthSuccess(response.data.result))
      );
    });
  });

  describe('С ошибками', () => {
    const action = {
      payload: '4h'
    };
    const error = new Error('test error');
    const saga = fetchEthFlow(action);
    
    it('put с передачей ошибки', () => {
      saga.next();
      expect(saga.throw(error).value).toEqual(put(fetchEthFailure(error)));
    });
  });
});
