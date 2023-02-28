import { PrismaClient } from '@prisma/client';

import { AuthController } from '../../presentation/controllers/AuthController';
import { UserLoader } from '../../repositories/prisma/user/UserLoader';
import { AuthService } from '../../services/AuthService';

export class AuthFactory {
  static create() {
    const prisma = new PrismaClient();
    const loader = new UserLoader(prisma);

    const service = new AuthService(loader);

    return new AuthController(service);
  }
}
