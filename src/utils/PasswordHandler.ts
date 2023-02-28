import bcrypt from 'bcrypt';

export class PasswordHandler {
  async encrypt(password: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hashSync(password, salt);
  }

  async compare(candidatePassword: string, password: string) {
    return bcrypt.compare(candidatePassword, password);
  }
}
