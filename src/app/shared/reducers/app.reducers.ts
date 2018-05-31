import { ActionReducerMap } from '@ngrx/store';
import * as loadingReducer from './loading/loading.reducer';
import * as groupReducer from './group/group.reducer';
import * as authReducer from './auth';
export interface AppState {
  auth: authReducer.State;
  loading: loadingReducer.State;
  group: groupReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer.authReducer,
  loading: loadingReducer.LoadingReducer,
  group: groupReducer.groupReducer
};
