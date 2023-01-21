import { PrismaClient, User } from '@prisma/client';

type PickedUser = Pick<User, 'email' | 'name' | 'role'>;

export class UserLoader {
  constructor(private readonly prisma: PrismaClient) {}

  async loadById(id: string): Promise<PickedUser> {
    return this.prisma.user.findUnique({
      where: { id },
      select: { email: true, name: true, role: true },
    });
  }
}
