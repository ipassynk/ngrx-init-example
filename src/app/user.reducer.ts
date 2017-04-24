import {Action} from '@ngrx/store';

export interface UserState {
  firstName: string;
  id: number;
  activeRoleId: number;
}

export const userReducer = (state = {}, action: Action) => {
  switch (action.type) {

    case 'USER_SWITCH_ROLE':
      return Object.assign({}, state, {activeRoleId: action.payload});

    default:
      return state;
  }
};
