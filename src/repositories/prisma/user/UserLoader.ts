import { PrismaClient } from '@prisma/client';

export class UserLoader {
  constructor(private readonly prisma: PrismaClient) {}

  async loadByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
