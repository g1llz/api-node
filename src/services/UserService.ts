import { UserUpdater } from '../repositories/prisma/user/UserUpdater';
import { UserCreator } from '../repositories/prisma/user/UserCreator';

import { UpdatePassword } from '../presentation/controllers/UserPasswordController';
import { CreateUser } from '../presentation/controllers/UserCreateController';
import { UpdateRole } from '../presentation/controllers/UserRoleController';

export class UserService {
  constructor(
    private creator: UserCreator,
    private updater: UserUpdater,
  ) {}

  async create(input: CreateUser) {
    return this.creator.create(input);
  }

  async updatePassword(input: UpdatePassword) {
    return this.updater.updatePassword(input);
  }

  async updateRole(input: UpdateRole) {
    return this.updater.updateRole(input);
  }
}
