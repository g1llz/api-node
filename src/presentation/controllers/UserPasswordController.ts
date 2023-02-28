import { UserService } from '../../services/UserService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

export type UpdatePassword = Record<string, unknown> & {
  userId: string;
  password: string;
};

export class UserPasswordController implements Controller {
  constructor(private service: UserService) {}

  async execute(input: UpdatePassword) {
    if (!input.password)
      return CreateResponse.badRequest('a new password is required');

    const user = await this.service.updatePassword(input);
    return CreateResponse.ok(user);
  }
}
