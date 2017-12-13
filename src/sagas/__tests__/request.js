import { 
  call, 
  put, 
  select 
} from "redux-saga/effects";
import { 
  login, 
  registration 
} from "./../../api";
import {
  loginFailure,
  registrationFailure,
  logout
} from "./../../actions/auth";
import requestFlow from "../request";

const fn = jest.fn();
const args = "token";

describe("Сага request", () => {

  describe("Без ошибок", () => {
    const saga = requestFlow(fn, args);

    it("call fn", () => {
      expect(saga.next().value).toEqual(call(fn, args));
    });
  });

  describe("С ошибками", () => {
    describe("при login", () => {
      const saga = requestFlow(login, args);

      const errors = {
        data: {
          message: "Error"
        },
        response: {
          status: 401
        }
      };

      it("put loginFailure", () => {
        saga.next();
        expect(saga.throw(errors).value).toEqual(
          put(loginFailure(errors.data.message))
        );
      });
    });
  });

  describe("при registration", () => {
    const saga = requestFlow(registration, args);
    const errors = {
      data: {
        message: {
          email: ["Error"]
        }
      },
      response: {
        status: 401
      }
    };

    it("put registrationFailure", () => {
      saga.next();
      expect(saga.throw(errors).value).toEqual(
        put(registrationFailure(errors.data.message.email[0]))
      );
    });
  });

  describe("При status 401", () => {
    const saga = requestFlow(fn, args);
    const errors = {
      data: {
        message: {
          email: ["Error"]
        }
      },
      response: {
        status: 401
      }
    };

    it("put logout", () => {
      saga.next();

      expect(saga.throw(errors).value).toEqual(put(logout()));
    });
  });
});