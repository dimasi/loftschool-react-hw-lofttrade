import {call, put} from "redux-saga/effects";
import {login, registration} from "./../api";
import {
  registrationFailure,
  loginFailure,
  logout
} from "./../actions/auth";

export default function* (fn, args) {
  try {
    const response = yield call(fn, args);
    return response;
  } 
  catch (error) {
    if (fn === registration) {
      yield put(registrationFailure(error.data.message.email[0]));
    } 
    else if (fn === login) {
      yield put(loginFailure(error.data.message));
    }

    if (error.response && error.response.status === 401) yield put(logout());

    throw error;
  }
}
