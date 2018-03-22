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

export function* fetchCurrencyFlow() {
  while (true) {
    const offset = yield select(getOffset);
    yield put(fetchBtcRequest(offset));
    yield put(fetchEthRequest(offset));

    yield call(delay, 15000);
  }
}

export function* fetchBtcFlow(action) {
  try {
    const response = yield call(candles, 'btc', action.payload);
    yield put(fetchBtcSuccess(response.data.result));
  } catch (error) {
    yield put(fetchBtcFailure(error));
  }
}

export function* fetchEthFlow(action) {
  try {
    const response = yield call(candles, 'eth', action.payload);
    yield put(fetchEthSuccess(response.data.result));
  } catch (error) {
    yield put(fetchEthFailure(error));
  }
}

export function* fetchCurrencyWatch() {
  let currencyLoopTask;

  while (true) {
    const action = yield take([
      selectBtc,
      selectEth,
      selectOffset,
      loginSuccess,
      logout
    ]);

    if (currencyLoopTask) {
      yield cancel(currencyLoopTask);
      currencyLoopTask = undefined;
    }

    if (action.type !== logout.toString()) {
      currencyLoopTask = yield fork(fetchCurrencyFlow);
    }
  }
}

export function* fetchBtcWatch() {
  yield takeLatest(fetchBtcRequest, fetchBtcFlow);
}

export function* fetchEthWatch() {
  yield takeLatest(fetchEthRequest, fetchEthFlow);
}
