import { ProfileUpdater } from '../repositories/prisma/profile/PorfileUpdater';
import { ProfileLoader } from '../repositories/prisma/profile/ProfileLoader';
import { UpdateProfile } from '../presentation/controllers/ProfileUpdateController';

export class ProfileService {
  constructor(private loader: ProfileLoader, private updater: ProfileUpdater) {}

  async loadById(uuid: string) {
    return this.loader.loadById(uuid);
  }

  async update(input: UpdateProfile) {
    return this.updater.update(input);
  }
}
