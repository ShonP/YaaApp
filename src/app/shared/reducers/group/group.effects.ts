import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { HttpService } from '../../services';
import * as GroupActions from './group.actions';
import { controllers, functions } from '../../models';

@Injectable()
export class GroupEffects {
  @Effect()
  fetchUserGroups = this.actions$
    .ofType(GroupActions.FETCH_GROUPS)
    .switchMap((action: GroupActions.FetchGroups) => {
      return this._httpService
        .get(controllers.national, functions.index, [action.payload])
        .map(x => {
          return new GroupActions.SetGroups(x);
        });
    });
  @Effect()
  removeUserFromGroup = this.actions$
    .ofType(GroupActions.REMOVE_USER)
    .switchMap((action: GroupActions.RemoveUser) => {
      return this._httpService
        .post(
          controllers.national,
          functions.removeUserFromGroup,
          action.payload
        )
        .map(x => {
          return new GroupActions.FetchGroup(action.payload.groupId);
        });
    });
  @Effect()
  activeNational = this.actions$
    .ofType(GroupActions.ACTIVE_NATIONAL)
    .switchMap((action: GroupActions.ActiveNational) => {
      return this._httpService
        .get(controllers.national, functions.activeNational, [action.payload])
        .map(x => {
          return new GroupActions.SetGroupReports(x);
        });
    });
  @Effect()
  addReport = this.actions$
    .ofType(GroupActions.POST_REPORT)
    .switchMap((action: GroupActions.PostReport) => {
      return this._httpService
        .post(controllers.national, functions.addReport, action.payload.obj, [
          action.payload.nationalId
        ])
        .map(x => {
          return new GroupActions.AddReport(x);
        });
    });
  @Effect()
  fetchGroup = this.actions$
    .ofType(GroupActions.FETCH_GROUP)
    .switchMap((action: GroupActions.FetchGroup) => {
      return this._httpService
        .get(controllers.national, functions.groupDetails, [action.payload])
        .map(x => {
          return new GroupActions.SetGroup(x);
        });
    });
  @Effect()
  fetchGroupReports = this.actions$
    .ofType(GroupActions.FETCH_GROUP_REPORTS)
    .switchMap((action: GroupActions.FetchGroupReports) => {
      return this._httpService
        .get(controllers.national, functions.getReports, [action.payload])
        .map(x => {
          return new GroupActions.SetGroupReports(x);
        });
    });
  @Effect()
  createGroup = this.actions$
    .ofType(GroupActions.CREATE_GROUP)
    .switchMap((action: GroupActions.CreateGroup) => {
      return this._httpService
        .post(controllers.national, functions.createGroup, action.payload)
        .map(x => {
          return new GroupActions.AddGroup(x);
        });
    });
  @Effect()
  makeAdmin = this.actions$
    .ofType(GroupActions.MAKE_ADMIN)
    .switchMap((action: GroupActions.MakeAdmin) => {
      return this._httpService
        .post(controllers.national, functions.makeAdmin, action.payload)
        .map(x => {
          return new GroupActions.SetGroup(x);
        });
    });
  constructor(private actions$: Actions, private _httpService: HttpService) {}
}
