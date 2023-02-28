import { PrismaClient } from '@prisma/client';

type Profile = {
  firstName: string;
  lastName: string;
  document: string;
  phone: string;
  user: {
    email: string;
    role: string;
  };
};

export class ProfileLoader {
  constructor(private readonly prisma: PrismaClient) {}

  async loadById(uuid: string): Promise<Profile> {
    return this.prisma.profile.findUnique({
      where: { uuid },
      select: {
        user: { select: { email: true, role: true } },
        firstName: true,
        lastName: true,
        phone: true,
        document: true,
      },
    });
  }
}
