import joi from 'joi';
import { UserStore } from 'external/store';
import * as error from 'app/error';

export default class GetUser {
  userStore: UserStore;

  constructor(userStore: UserStore) {
    this.userStore = userStore;
  }

  _validate(input) {
    const valid = joi.validate(input, {
      id: joi.string().required(),
    });

    console.log(valid.error);

    if (valid.error) {
      throw error.validate(valid);
    }
  }

  async do(input) {
    this._validate(input);

    const user = await this.userStore.getUser(input.id);
    if (!user) {
      throw error.userNotFound();
    }

    return user;
  }
}
