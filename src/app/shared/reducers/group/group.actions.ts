import { Action } from '@ngrx/store';

export const FETCH_GROUPS = 'FETCH_GROUPS';
export const SET_GROUPS = 'SET_GROUPS';
export const FETCH_GROUP = 'FETCH_GROUP';
export const SET_GROUP = 'SET_GROUP';
export const FETCH_GROUP_REPORTS = 'FETCH_GROUP_REPORTS';
export const SET_GROUP_REPORTS = 'SET_GROUP_REPORTS';
export const CREATE_GROUP = 'CREATE_GROUP';
export const ADD_GROUP = 'ADD_GROUP';
export const ACTIVE_NATIONAL = 'ACTIVE_NATIONAL';
export const POST_REPORT = 'POST_REPORT';
export const ADD_REPORT = 'ADD_REPORT';
export const MAKE_ADMIN = 'MAKE_ADMIN';
export const REMOVE_USER = 'REMOVE_USER';
export class ActiveNational implements Action {
  readonly type = ACTIVE_NATIONAL;
  constructor(public payload) {}
}
export class RemoveUser implements Action {
  readonly type = REMOVE_USER;
  constructor(public payload) {}
}
export class MakeAdmin implements Action {
  readonly type = MAKE_ADMIN;
  constructor(public payload) {}
}
export class PostReport implements Action {
  readonly type = POST_REPORT;
  constructor(public payload) {}
}
export class AddReport implements Action {
  readonly type = ADD_REPORT;
  constructor(public payload) {}
}
export class FetchGroups implements Action {
  readonly type = FETCH_GROUPS;
  constructor(public payload) {}
}
export class AddGroup implements Action {
  readonly type = ADD_GROUP;
  constructor(public payload) {}
}

export class SetGroups implements Action {
  readonly type = SET_GROUPS;
  constructor(public payload) {}
}

export class FetchGroup implements Action {
  readonly type = FETCH_GROUP;
  constructor(public payload) {}
}

export class SetGroup implements Action {
  readonly type = SET_GROUP;
  constructor(public payload) {}
}
export class FetchGroupReports implements Action {
  readonly type = FETCH_GROUP_REPORTS;
  constructor(public payload) {}
}

export class SetGroupReports implements Action {
  readonly type = SET_GROUP_REPORTS;
  constructor(public payload) {}
}

export class CreateGroup implements Action {
  readonly type = CREATE_GROUP;
  constructor(public payload) {}
}

export type GroupActions =
  | RemoveUser
  | PostReport
  | AddReport
  | ActiveNational
  | AddGroup
  | FetchGroups
  | SetGroup
  | SetGroups
  | FetchGroup
  | CreateGroup
  | FetchGroupReports
  | SetGroupReports;
