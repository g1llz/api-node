import { UserService } from '../../services/UserService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

export type CreateUser = Record<string, unknown> & {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName?: string;
  document?: string;
  phone?: string;
};

export class UserCreateController implements Controller {
  constructor(private service: UserService) {}

  async execute(input: CreateUser) {
    const user = await this.service.create(input);

    return CreateResponse.created(user);
  }
}
