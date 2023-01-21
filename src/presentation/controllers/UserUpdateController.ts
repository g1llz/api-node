import { UserService } from '../../services/UserService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

type Input = Record<string, unknown> & {
  userId: string;
  password?: string;
  role?: string;
  name?: string;
};

export class UserUpdateController implements Controller {
  constructor(private readonly userService: UserService) {}

  async execute(input: Input) {
    const user = await this.userService.update(input);
    return CreateResponse.ok(user);
  }
}
