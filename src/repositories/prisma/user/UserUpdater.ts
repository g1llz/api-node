import { PrismaClient } from '@prisma/client';

import { UpdatePassword } from '../../../presentation/controllers/UserPasswordController';
import { UpdateRole } from '../../../presentation/controllers/UserRoleController';

export class UserUpdater {
  constructor(private readonly prisma: PrismaClient) {}

  async updatePassword({ userId, password }: UpdatePassword) {
    return this.prisma.user.update({
      where: { uuid: userId },
      data: { password },
      select: { email: true, role: true, updatedAt: true },
    });
  }

  async updateRole({ userId, role }: UpdateRole) {
    return this.prisma.user.update({
      where: { uuid: userId },
      data: { role: role as 'agent' | 'admin' },
      select: { email: true, role: true, updatedAt: true },
    });
  }
}
