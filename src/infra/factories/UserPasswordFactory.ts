import { PrismaClient } from '@prisma/client';

import { UserPasswordController } from '../../presentation/controllers/UserPasswordController';
import { UserCreator } from '../../repositories/prisma/user/UserCreator';
import { UserUpdater } from '../../repositories/prisma/user/UserUpdater';
import { UserService } from '../../services/UserService';

export class UserPasswordFactory {
  static create() {
    const prisma = new PrismaClient();
    const creator = new UserCreator(prisma);
    const updater = new UserUpdater(prisma);
    const service = new UserService(creator, updater);

    return new UserPasswordController(service);
  }
}
