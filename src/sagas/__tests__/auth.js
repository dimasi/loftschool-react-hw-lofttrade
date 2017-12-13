import {
  takeLatest,
  take,
  put,
  call,
  select
} from 'redux-saga/effects';
import {
  setTokenApi, 
  clearTokenApi, 
  login, 
  registration
} from './../../api';
import {
  loginRequest,
  loginSuccess,
  registrationRequest,
  logout
} from './../../actions/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from './../../localStorage';
import {getIsAuthorized} from './../../reducers/auth';
import requestFlow from '../request';
import {authFlow} from '../auth';

describe('Сага authFlow', () => {
  describe('Без токена в localStorage', () => {
    const sagaLogin = authFlow();
    const token = 'token';

    it('select getIsAuthorized', () => {
      expect(sagaLogin.next().value).toEqual(select(getIsAuthorized));
    });

    it('call getTokenFromLocalStorage', () => {
      expect(sagaLogin.next().value).toEqual(
        call(getTokenFromLocalStorage)
      );
    });

    it('take authLoginRequest и authRegistrationRequest', () => {
      expect(sagaLogin.next().value).toEqual(
        take([loginRequest, registrationRequest])
      );
    });

    it('call login', () => {
      const action = {
        type: loginRequest.toString(),
        payload: { 
          email: 'test-email', 
          password: 'test-pass'
        }
      };
      
      expect(sagaLogin.next(action).value).toEqual(
        call(requestFlow, login, action.payload)
      );
    });

    it('call registration', () => {
      const sagaRegistration = authFlow();

      sagaRegistration.next();
      sagaRegistration.next();
      sagaRegistration.next();
      const action = {
        type: registrationRequest.toString(),
        payload: { 
          email: 'test-email', 
          password: 'test-pass' 
        }
      };

      expect(sagaRegistration.next(action).value).toEqual(
        call(requestFlow, registration, action.payload)
      );
    });

    it('put authLoginSuccess', () => {
      const action = {
        email: 'test-email', 
        password: 'test-pass',
        data: {
          jwt: token
        }
      };

      expect(sagaLogin.next(action).value).toEqual(
        put(loginSuccess())
      );
    });

    it('call(setTokenApi, token)', () => {
      expect(sagaLogin.next().value).toEqual(call(setTokenApi, token));
    });

    it('call setTokenToLocalStorage', () => {
      expect(sagaLogin.next().value).toEqual(
        call(setTokenToLocalStorage, token)
      );
    });

    it('take logout', () => {
      expect(sagaLogin.next().value).toEqual(take(logout));
    });

    it('call removeTokenFromLocalStorage', () => {
      expect(sagaLogin.next().value).toEqual(
        call(removeTokenFromLocalStorage)
      );
    });

    it('call clearTokenApi', () => {
      expect(sagaLogin.next().value).toEqual(call(clearTokenApi));
    });
  });
});
