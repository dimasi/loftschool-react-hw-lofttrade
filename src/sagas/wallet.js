import {
  takeLatest,
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

export function* fetchWalletFlow() {
  try {
    const response = yield call(getWallet);
    yield put(fetchWalletSuccess(response.data.result));
  } catch (error) {
    yield put(fetchWalletFailure(error));
  }
}

export function* sellCurrencyFlow(action) {
  try {
    const response = yield call(
      sellCurrency,
      action.payload.currencyName,
      action.payload.value
    );
    yield put(sellCurrencySuccess(response.data));
    yield fork(fetchWalletFlow);
  } catch (error) {
    yield put(sellCurrencyFailure(error));
  }
}

export function* buyCurrencyFlow(action) {
  try {
    const response = yield call(
      buyCurrency,
      action.payload.currencyName,
      action.payload.value
    );
    yield put(buyCurrencySuccess(response.data));
    yield fork(fetchWalletFlow);
  } catch (error) {
    yield put(buyCurrencyFailure(error));
  }
}

export function* fetchWalletWatch() {
  yield takeLatest([
    fetchBtcRequest, 
    fetchEthRequest
  ], fetchWalletFlow);
}

export function* sellCurrencyWatch() {
  yield takeLatest(sellCurrencyRequest, sellCurrencyFlow);
}

export function* buyCurrencyWatch() {
  yield takeLatest(buyCurrencyRequest, buyCurrencyFlow);
}
