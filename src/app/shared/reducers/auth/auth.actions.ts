import { Action } from '@ngrx/store';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const FAILED = 'FAILED';
export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';
export class Signup implements Action {
  readonly type = SIGNUP;
  constructor(public payload) {}
}
export class SetError implements Action {
  readonly type = SET_ERROR;
  constructor(public payload) {}
}

export class Signin implements Action {
  readonly type = SIGNIN;
  constructor(public payload) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class Failed implements Action {
  readonly type = FAILED;
}

export class SetUser implements Action {
  readonly type = SET_USER;
  constructor(public payload) {}
}

export type AuthActions =
  | SetError
  | Signup
  | Failed
  | Signin
  | Logout
  | SetUser;
