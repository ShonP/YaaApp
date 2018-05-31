import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { HttpService } from '../../services';
import * as AuthActions from './auth.actions';
import { controllers, functions } from '../../models';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.SIGNUP)
    .switchMap((action: AuthActions.Signup) => {
      return this._httpService
        .post(controllers.authentication, functions.signUp, action.payload)
        .map(x => {
          return new AuthActions.SetUser(x);
        });
    });
  @Effect()
  authSignin = this.actions$
    .ofType(AuthActions.SIGNIN)
    .switchMap((action: AuthActions.Signin) => {
      return this._httpService
        .post(controllers.authentication, functions.signIn, action.payload)
        .map((x: any) => {
          if (x === null)
            return new AuthActions.SetError('סיסמא או משתמש אינם נכונים');
          else return new AuthActions.SetUser(x);
        }); //implement error
    });
  constructor(private actions$: Actions, private _httpService: HttpService) {}
}
