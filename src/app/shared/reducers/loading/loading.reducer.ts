import * as LoadingActions from './loading.actions';
export interface State {
  Loading: Array<Boolean>;
}
const initialState: State = {
  Loading: []
};
export function LoadingReducer(
  state = initialState,
  action: LoadingActions.LoadingActions
) {
  switch (action.type) {
    case LoadingActions.ADD_LOADING:
      return { ...state, Loading: [...state.Loading, true] };
    case LoadingActions.REMOVE_LOADING:
      const oldLoading = [...state.Loading];
      oldLoading.pop();
      return { ...state, Loading: oldLoading };
    default:
      return state;
  }
}
