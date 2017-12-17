import {combineReducers} from "redux";
import {handleActions} from "redux-actions";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  registrationRequest,
  registrationFailure
} from "actions/auth";

export const isAuthorized = handleActions(
  {
    [registrationRequest]: () => false,
    [registrationFailure]: () => false,
    [loginRequest]: () => false,
    [loginSuccess]: () => true,
    [loginFailure]: () => false
  },
  false
);

export const registationError = handleActions(
  {
    [loginRequest]: () => undefined,
    [loginSuccess]: () => undefined,
    [loginFailure]: () => undefined,
    [registrationRequest]: () => undefined,
    [registrationFailure]: (state, action) => action.payload
  },
  null
);

export const loginError = handleActions(
  {
    [registrationRequest]: () => undefined,
    [registrationFailure]: () => undefined,
    [loginRequest]: () => undefined,
    [loginSuccess]: () => undefined,
    [loginFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({
  isAuthorized,
  registationError,
  loginError
});

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getLoginError = state => state.auth.loginError;
export const getRegistrationError = state => state.auth.registationError;
