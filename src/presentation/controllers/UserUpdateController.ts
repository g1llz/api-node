import { UserService } from '../../services/UserService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

type Input = Record<string, unknown> & {
  password: string;
  role: string;
};

export class UserUpdateController implements Controller {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async execute(input: Input) {
    const user = await this.userService.update({
      password: input.password,
      role: input.role,
    });

    return CreateResponse.ok(user);
  }
}
