import {fork} from 'redux-saga/effects';
import {authWatch} from './auth';
import {
  fetchBtcWatch, 
  fetchEthWatch, 
  fetchCurrencyWatch
} from './currency';
import {
  fetchWalletWatch,
  sellCurrencyWatch,
  buyCurrencyWatch
} from './wallet';

export default function*() {
  yield fork(authWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(fetchCurrencyWatch);
  yield fork(fetchWalletWatch);
  yield fork(sellCurrencyWatch);
  yield fork(buyCurrencyWatch);
}
