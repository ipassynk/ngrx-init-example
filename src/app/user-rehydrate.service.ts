import {Injectable} from '@angular/core';
import {UserState} from 'app/user.reducer';

@Injectable()
export class UserRehydrateService {
  constructor() {
  }

  rehydrateUser(): UserState {
    return {
      firstName: 'julia',
      id: 1,
      activeRoleId: 2
    } as UserState;
  }
}
