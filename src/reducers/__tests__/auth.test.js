import { handleActions } from 'redux-actions';
import {
  registrationRequest,
  registrationFailure,
  loginRequest,
  loginSuccess,
  loginFailure
} from './../../actions/auth';
import { 
  isAuthorized,
  registationError,
  loginError
} from './../auth';

describe('Редьюсер auth', () => {
  describe('registrationRequest', () => {
    it('Изменяет isAuthorized на false', () => {
      const next = isAuthorized(true, {type: registrationRequest});

      expect(next).toBeFalsy();
    });

    it('Очищает loginError', () => {
      const next = loginError('test', {type: registrationRequest});

      expect(next).toBeNull();
    });

    it('Очищает registationError', () => {
      const next = registationError('test', {type: registrationRequest});

      expect(next).toBeNull();
    });
  });
  
  describe('registrationFailure', () => {
    it('Изменяет isAuthorized на false', () => {
      const next = isAuthorized(true, {type: registrationFailure});

      expect(next).toEqual(false);
    });

    it('Очищает loginError', () => {
      const next = loginError('test', {type: registrationFailure});

      expect(next).toBeNull();
    });

    it('Устанавливает данные для registationError', () => {
      const next = registationError(null, {
        type: registrationFailure,
        payload: 'error'
      });

      expect(next).toEqual('error');
    });
  });
  
  describe('loginRequest', () => {
    it('Изменяет isAuthorized на false', () => {
      const next = isAuthorized(true, {type: loginRequest});

      expect(next).toBeFalsy();
    });

    it('Очищает loginError', () => {
      const next = loginError('test', {type: loginRequest});

      expect(next).toBeNull();
    });

    it('Очищает registationError', () => {
      const next = registationError('test', {type: loginRequest});

      expect(next).toBeNull();
    });
  });

  describe('loginSuccess', () => {
    it('Изменяет isAuthorized на true', () => {
      const next = isAuthorized(false, {type: loginSuccess});

      expect(next).toEqual(true);
    });

    it('Очищает loginError', () => {
      const next = loginError('test', {type: loginSuccess});

      expect(next).toBeNull();
    });

    it('Очищает поле registationError', () => {
      const next = registationError('test', {type: loginSuccess});

      expect(next).toBeNull();
    });
  });

  describe('authLoginFailure', () => {
    it('Изменяет isAuthorized на false', () => {
      const next = isAuthorized(true, {type: loginFailure});

      expect(next).toEqual(false);
    });

    it('Наполняет данными loginError', () => {
      const next = loginError(null, {
        type: loginFailure,
        payload: 'error'
      });

      expect(next).toEqual('error');
    });

    it('Очищает registationError', () => {
      const next = registationError('test', {type: loginFailure});

      expect(next).toBeNull();
    });
  });
});
