import * as AuthActions from './auth.actions';

export interface State {
  user: any;
  authenticated: boolean;
  error: string;
}

const initialState: State = {
  user: null,
  authenticated: false,
  error: ''
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
        authenticated: false
      };
    case AuthActions.SET_USER:
      return {
        ...state,
        authenticated: true,
        user: action.payload
      };
    case AuthActions.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
