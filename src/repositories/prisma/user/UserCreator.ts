import { PrismaClient, User } from '@prisma/client';

type PickedUser = Pick<User, 'id' | 'email' | 'role'>

export class UserCreator {
  constructor(private readonly prisma: PrismaClient) {}

  async create({ name, email, password }): Promise<PickedUser> {
    return this.prisma.user.create({
      data: {
        email,
        password,
        role: 'agent',
        name,
      },
      select: { id: true, email: true, role: true }
    });
  }
}
