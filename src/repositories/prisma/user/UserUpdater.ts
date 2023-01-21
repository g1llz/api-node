import { PrismaClient } from '@prisma/client';

export type UpdaterInputType = {
  userId: string;
  password?: string;
  role?: string;
  name?: string;
};

export class UserUpdater {
  constructor(private readonly prisma: PrismaClient) {}

  async update(input: UpdaterInputType) {
    const { userId: id, ...rest } = input;

    return this.prisma.user.update({
      where: { id },
      data: { ...rest },
      select: {
        name: true,
        role: true,
      },
    });
  }
}
