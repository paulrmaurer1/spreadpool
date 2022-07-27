// users.reducer.ts

import { Reducer, Action } from 'redux';
import { createSelector } from 'reselect';
import { IUserData } from '../shared/interfaces';
import * as UserActions from './user.actions';
import { AppState } from '../app.state';

const initialState: AppState = { currentUser: null };

export const UserReducer: Reducer<AppState> =
  // (state: AppState = initialState, action: Action): AppState => {
  (state: AppState = initialState, action: UserActions.SetCurrentUserAction): AppState => {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER:
      // const user: IUserData = (<UserActions.SetCurrentUserAction>action).user;
      const user: IUserData = action.user;
      return {
        currentUser: user
      };
    default:
      return state;
  }
};