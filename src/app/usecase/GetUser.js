import { UserStore } from 'external/store';

export default class GetUser {
  userStore: UserStore;

  constructor(userStore: UserStore) {
    this.userStore = userStore;
  }

  do() {
    return this.userStore.getUser();
  }
}
