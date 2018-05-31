import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import 'rxjs/add/operator/finally';
import * as loadingActions from '../reducers/loading/loading.actions';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private _store: Store<AppState>) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._store.dispatch(new loadingActions.AddLoading());
    return next.handle(req).finally(() => {
      this._store.dispatch(new loadingActions.RemoveLoading());
    });
  }
}
