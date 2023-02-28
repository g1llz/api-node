import { PrismaClient } from '@prisma/client';

import { UpdateProfile } from '../../../presentation/controllers/ProfileUpdateController';

export class ProfileUpdater {
  constructor(private readonly prisma: PrismaClient) {}

  async update(input: UpdateProfile) {
    const { profileId: uuid, ...rest } = input;

    return this.prisma.profile.update({
      where: { uuid },
      data: { ...rest },
      select: { firstName: true, lastName: true, document: true, phone: true, updatedAt: true },
    });
  }
}
