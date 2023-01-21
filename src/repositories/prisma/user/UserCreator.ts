export class UserCreator {
  constructor() {}

  create({ email, password }) {
    return {
      id: 'XPTO12zxz',
      email,
      role: 'agent'
    }
  }
}
