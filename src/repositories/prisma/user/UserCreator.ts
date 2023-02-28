import { PrismaClient, User } from '@prisma/client';

import { PasswordHandler } from '../../../utils/PasswordHandler';
import { CreateUser } from '../../../presentation/controllers/UserCreateController';

type PickedUser = Pick<User, 'profileId' | 'email' | 'role'>;

export class UserCreator {
  constructor(private readonly prisma: PrismaClient) {}

  async create(input: CreateUser): Promise<PickedUser> {
    const password = await new PasswordHandler().encrypt(input.password);

    return this.prisma.user.create({
      data: {
        email: input.email,
        password,
        role: input.role as 'agent' | 'admin',
        profile: {
          create: {
            firstName: input.firstName,
            lastName: input.lastName ?? null,
            document: input.document ?? null,
            phone: input.phone ?? null,
          },
        },
      },
      select: { profileId: true, email: true, role: true, createdAt: true },
    });
  }
}
