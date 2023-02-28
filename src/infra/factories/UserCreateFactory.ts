import { PrismaClient } from '@prisma/client';

import { UserCreateController } from '../../presentation/controllers/UserCreateController';
import { UserCreator } from '../../repositories/prisma/user/UserCreator';
import { UserUpdater } from '../../repositories/prisma/user/UserUpdater';
import { UserService } from '../../services/UserService';

export class UserCreateFactory {
  static create() {
    const prisma = new PrismaClient();
    const creator = new UserCreator(prisma);
    const updater = new UserUpdater(prisma);
    const service = new UserService(creator, updater);

    return new UserCreateController(service);
  }
}
