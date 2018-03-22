import {createActions} from 'redux-actions';

const actionCreators = createActions(
  {
    LOGIN: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined
    },
    REGISTRATION: {
      REQUEST: undefined,
      FAILURE: undefined
    },
    LOGOUT: undefined
  },
  { namespace: '_' }
);

export const loginRequest = actionCreators.login.request;
export const loginSuccess = actionCreators.login.success;
export const loginFailure = actionCreators.login.failure;
export const registrationRequest = actionCreators.registration.request;
export const registrationFailure = actionCreators.registration.failure;
export const logout = actionCreators.logout;
