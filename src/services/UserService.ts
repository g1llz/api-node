import { UserUpdater } from '../repositories/prisma/user/UserUpdater';
import { UserCreator } from '../repositories/prisma/user/UserCreator';
import { UserLoader } from '../repositories/prisma/user/UserLoader';

export class UserService {
  private readonly userLoader: UserLoader;
  private readonly userCreator: UserCreator;
  private readonly userUpdater: UserUpdater;

  constructor() {
    this.userLoader = new UserLoader();
    this.userCreator = new UserCreator();
    this.userUpdater = new UserUpdater();
  }

  async loadById(id: string) {
    return this.userLoader.loadById(id);
  }

  async create({ email, password }) {
    return this.userCreator.create({
      email,
      password,
    });
  }

  async update({ password, role }) {
    return this.userUpdater.update({
      password,
      role,
    });
  }
}
