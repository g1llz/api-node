import { UserService } from '../../services/UserService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

export type UpdateRole = Record<string, unknown> & {
  userId: string;
  role: string;
};

export class UserRoleController implements Controller {
  constructor(private service: UserService) {}

  async execute(input: UpdateRole) {
    if (!input.role)
      return CreateResponse.badRequest('role is required');

    const user = await this.service.updateRole(input);
    return CreateResponse.ok(user);
  }
}
