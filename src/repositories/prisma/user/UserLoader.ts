export class UserLoader {
  constructor() {}

  async loadById(id: string) {
    return {
      id,
      role: 'agent'
    }
  }
}
