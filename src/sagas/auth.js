import { 
  take, 
  put, 
  call, 
  select 
} from "redux-saga/effects";
import { 
  setTokenApi, 
  clearTokenApi, 
  login, 
  registration 
} from "./../api";
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from "./../localStorage";
import {
  registrationRequest,
  loginRequest,
  loginSuccess,
  logout
} from "./../actions/auth";
import {getIsAuthorized} from "./../reducers/auth";
import requestFlow from "./request";

export function* authFlow() {
  let token;

  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);

    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;

        yield put(loginSuccess());
      } else {
        const action = yield take([loginRequest, registrationRequest]);

        let response;
        if (action.type === loginRequest.toString()) {
          response = yield call(requestFlow, login, action.payload);
        } else if (action.type === registrationRequest.toString()) {
          response = yield call(requestFlow, registration, action.payload);
        }

        token = response.data.jwt;
        yield put(loginSuccess());
      }
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}
