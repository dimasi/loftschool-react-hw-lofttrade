import {fork} from 'redux-saga/effects';
import {authWatch} from "./auth";
import {
  fetchBtcWatch, 
  fetchEthWatch, 
  fetchCurrencyWatch
} from "./currency";

export default function*() {
  yield fork(authWatch);
  yield fork(fetchBtcWatch);
  yield fork(fetchEthWatch);
  yield fork(fetchCurrencyWatch);
}
