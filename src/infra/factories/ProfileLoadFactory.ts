import { PrismaClient } from '@prisma/client';

import { ProfileLoadController } from '../../presentation/controllers/ProfileLoadController';
import { ProfileUpdater } from '../../repositories/prisma/profile/PorfileUpdater';
import { ProfileLoader } from '../../repositories/prisma/profile/ProfileLoader';
import { ProfileService } from '../../services/ProfileService';

export class ProfileLoadFactory {
  static create() {
    const prisma = new PrismaClient();
    const loader = new ProfileLoader(prisma);
    const updater = new ProfileUpdater(prisma);
    const service = new ProfileService(loader, updater);

    return new ProfileLoadController(service);
  }
}
