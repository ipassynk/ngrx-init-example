import {UserRehydrateService} from 'app/user-rehydrate.service';
import {userReducer, UserState} from 'app/user.reducer';

export function initialStoreFactory(userRehydrateService: UserRehydrateService) {
  const user = userRehydrateService.rehydrateUser() || {};
  return {user};
}

export interface AppState {
  user: UserState;
}

export const reducers = {
  user: userReducer
};
