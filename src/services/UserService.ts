import { UpdaterInputType, UserUpdater } from '../repositories/prisma/user/UserUpdater';
import { UserCreator } from '../repositories/prisma/user/UserCreator';
import { UserLoader } from '../repositories/prisma/user/UserLoader';

export class UserService {
  constructor(
    private readonly userLoader: UserLoader,
    private readonly userCreator: UserCreator,
    private readonly userUpdater: UserUpdater,
  ) {}

  async loadById(id: string) {
    return this.userLoader.loadById(id);
  }

  async create({ name, email, password }) {
    return this.userCreator.create({
      name,
      email,
      password,
    });
  }

  async update(input: UpdaterInputType) {
    return this.userUpdater.update(input);
  }
}
