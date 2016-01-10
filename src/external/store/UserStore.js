import boom from 'boom';

export default class UserStore {
  user;

  constructor(user) {
    this.user = user;
  }

  async getUser(id: string) {
    try {
      return await this.user.findOne({
        where: { id }
      });
    } catch (err) {
      throw boom.wrap(err);
    }
  }
}
