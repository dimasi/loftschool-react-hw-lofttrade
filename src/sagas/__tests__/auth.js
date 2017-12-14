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
  loginFailure,
  registrationRequest,
  registrationFailure,
  logout
} from './../../actions/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from './../../localStorage';
import {getIsAuthorized} from './../../reducers/auth';
import {loginFlow, registrationFlow} from '../auth';

describe('Сага loginFlow', () => {
  describe('Без токена в localStorage', () => {
    const sagaLogin = loginFlow();
    const token = 'token';

    it('select getIsAuthorized', () => {
      expect(sagaLogin.next().value).toEqual(select(getIsAuthorized));
    });

    it('call getTokenFromLocalStorage', () => {
      expect(sagaLogin.next().value).toEqual(
        call(getTokenFromLocalStorage)
      );
    });

    it('take loginRequest', () => {
      expect(sagaLogin.next().value).toEqual(take(loginRequest));
    });

    it('call login', () => {
      const action = {
        type: loginRequest.toString(),
        payload: { 
          email: 'test-email', 
          password: 'test-pass'
        }
      };
      
      expect(sagaLogin.next(action).value).toEqual(call(login, action.payload));
    });

    it('put loginSuccess', () => {
      const action = {
        email: 'test-email', 
        password: 'test-pass',
        data: {
          jwt: token
        }
      };

      expect(sagaLogin.next(action).value).toEqual(put(loginSuccess()));
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

  describe('С токеном в localStorage', () => {
    const sagaLogin = loginFlow();
    const token = 'token';

    it('select getIsAuthorized', () => {
      expect(sagaLogin.next().value).toEqual(select(getIsAuthorized));
    });

    it('call getTokenFromLocalStorage', () => {
      expect(sagaLogin.next().value).toEqual(
        call(getTokenFromLocalStorage)
      );
    });

    it('put loginSuccess', () => {
      expect(sagaLogin.next(token).value).toEqual(put(loginSuccess()));
    });
  });
});

describe('Сага registrationFlow', () => {
  describe('Без токена в localStorage', () => {
    const sagaRegistration = registrationFlow();
    const token = 'token';

    it('select getIsAuthorized', () => {
      expect(sagaRegistration.next().value).toEqual(select(getIsAuthorized));
    });

    it('call getTokenFromLocalStorage', () => {
      expect(sagaRegistration.next().value).toEqual(
        call(getTokenFromLocalStorage)
      );
    });

    it('take registrationRequest', () => {
      expect(sagaRegistration.next().value).toEqual(take(registrationRequest));
    });

    it('call registration', () => {
      const action = {
        type: registrationRequest.toString(),
        payload: { 
          email: 'test-email', 
          password: 'test-pass'
        }
      };
      
      expect(sagaRegistration.next(action).value).toEqual(
        call(registration, action.payload)
      );
    });

    it('put loginSuccess', () => {
      const action = {
        email: 'test-email', 
        password: 'test-pass',
        data: {
          jwt: token
        }
      };

      expect(sagaRegistration.next(action).value).toEqual(put(loginSuccess()));
    });

    it('call(setTokenApi, token)', () => {
      expect(sagaRegistration.next().value).toEqual(call(setTokenApi, token));
    });

    it('call setTokenToLocalStorage', () => {
      expect(sagaRegistration.next().value).toEqual(
        call(setTokenToLocalStorage, token)
      );
    });

    it('take logout', () => {
      expect(sagaRegistration.next().value).toEqual(take(logout));
    });

    it('call removeTokenFromLocalStorage', () => {
      expect(sagaRegistration.next().value).toEqual(
        call(removeTokenFromLocalStorage)
      );
    });

    it('call clearTokenApi', () => {
      expect(sagaRegistration.next().value).toEqual(call(clearTokenApi));
    });
  });

  describe('С токеном в localStorage', () => {
    const sagaRegistration = registrationFlow();
    const token = 'token';

    it('select getIsAuthorized', () => {
      expect(sagaRegistration.next().value).toEqual(select(getIsAuthorized));
    });

    it('call getTokenFromLocalStorage', () => {
      expect(sagaRegistration.next().value).toEqual(
        call(getTokenFromLocalStorage)
      );
    });

    it('put loginSuccess', () => {
      expect(sagaRegistration.next(token).value).toEqual(put(loginSuccess()));
    });
  });
});
