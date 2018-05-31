import * as GroupActions from './group.actions';

export interface State {
  userGroups: Array<any>;
  currentGroup: any;
  currentReports: any;
}

const initialState: State = {
  userGroups: [],
  currentReports: null,
  currentGroup: null
};

export function groupReducer(
  state = initialState,
  action: GroupActions.GroupActions
) {
  switch (action.type) {
    case GroupActions.SET_GROUPS:
      return {
        ...state,
        userGroups: action.payload
      };
    case GroupActions.ADD_GROUP:
      return {
        ...state,
        userGroups: [...state.userGroups, action.payload]
      };
    case GroupActions.SET_GROUP:
      return {
        ...state,
        currentGroup: action.payload
      };
    case GroupActions.SET_GROUP_REPORTS:
      return {
        ...state,
        currentReports: action.payload
      };
    case GroupActions.ADD_REPORT:
      const oldReports = [...state.currentReports.reports];
      oldReports.push(action.payload);
      return {
        ...state,
        currentReports: { ...state.currentReports, reports: oldReports }
      };
    default:
      return state;
  }
}
