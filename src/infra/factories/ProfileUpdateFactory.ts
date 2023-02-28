import { PrismaClient } from '@prisma/client';

import { ProfileUpdateController } from '../../presentation/controllers/ProfileUpdateController';
import { ProfileUpdater } from '../../repositories/prisma/profile/PorfileUpdater';
import { ProfileLoader } from '../../repositories/prisma/profile/ProfileLoader';
import { ProfileService } from '../../services/ProfileService';

export class ProfileUpdateFactory {
  static create() {
    const prisma = new PrismaClient();
    const loader = new ProfileLoader(prisma);
    const updater = new ProfileUpdater(prisma);
    const service = new ProfileService(loader, updater);

    return new ProfileUpdateController(service);
  }
}
