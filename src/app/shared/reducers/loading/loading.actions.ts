import { Action } from '@ngrx/store';
export const ADD_LOADING = 'ADD_LOADING';
export const REMOVE_LOADING = 'REMOVE_LOADING';
export class AddLoading implements Action {
  readonly type = ADD_LOADING;
}
export class RemoveLoading implements Action {
  readonly type = REMOVE_LOADING;
}
export type LoadingActions = AddLoading | RemoveLoading;
