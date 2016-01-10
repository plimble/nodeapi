export default class UserStore {
  user;

  constructor(user) {
    this.user = user;
  }

  getUser() {
    return this.user.findOne();
  }
}
