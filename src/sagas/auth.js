import { 
  fork,
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
} from "api";
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from "localStorage";
import {
  registrationRequest,
  registrationFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
} from "actions/auth";
import {getIsAuthorized} from "reducers/auth";


export function* loginFlow() {
  const isAuthorized = yield select(getIsAuthorized);
  const localStorageToken = yield call(getTokenFromLocalStorage);
  let token;

  if (!isAuthorized) {
    if (localStorageToken) {
      token = localStorageToken;
      yield call(setTokenApi, token);
      yield put(loginSuccess());
    } else {
      while (true) {
        const action = yield take(loginRequest);
        let response;
        try {
          response = yield call(login, action.payload);
          token = response.data.jwt;
          
          yield put(loginSuccess());
          yield call(setTokenApi, token);
          yield call(setTokenToLocalStorage, token);
          yield take(logout);
          yield call(removeTokenFromLocalStorage);
          yield call(clearTokenApi);
        }
        catch (error) {
          yield put(loginFailure(error.data.message));
        }
      }
    }
  }
}

export function* registrationFlow() {
  const isAuthorized = yield select(getIsAuthorized);
  const localStorageToken = yield call(getTokenFromLocalStorage);
  let token;

  if (!isAuthorized) {
    if (localStorageToken) {
      token = localStorageToken;
      yield call(setTokenApi, token);
      yield put(loginSuccess());
    } else {
      while (true) {
        const action = yield take(registrationRequest);
        let response;
        try {
          response = yield call(registration, action.payload);
          token = response.data.jwt;

          yield put(loginSuccess());
          yield call(setTokenApi, token);
          yield call(setTokenToLocalStorage, token);
          yield take(logout);
          yield call(removeTokenFromLocalStorage);
          yield call(clearTokenApi);
        }
        catch (error) {
          yield put(registrationFailure(error.data.message));
        }
      }
    }
  }
}

export function* authWatch() {
  yield fork(loginFlow);
  yield fork(registrationFlow);
}
