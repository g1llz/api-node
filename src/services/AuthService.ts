import { UserLoader } from '../repositories/prisma/user/UserLoader';

export class AuthService {
  constructor(private loader: UserLoader) {}

  async loadUserByEmail(email: string) {
    return this.loader.loadByEmail(email);
  }
}
