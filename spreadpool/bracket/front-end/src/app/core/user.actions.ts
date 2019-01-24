// user.actions.ts

import { Action, ActionCreator } from 'redux';
import { IUserData } from '../shared/interfaces';

/**
 * UserActions specifies action creators concerning Users
 */
export const SET_CURRENT_USER = '[User] Set Current';
export interface SetCurrentUserAction extends Action {
  user: IUserData;
}
export const setCurrentUser: ActionCreator<SetCurrentUserAction> =
  (user) => ({
    type: SET_CURRENT_USER,
    user: user
  });