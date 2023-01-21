import { UserService } from '../../services/UserService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

type Input = Record<string, unknown> & {
  email: string;
  password: string;
};

export class UserCreateController implements Controller {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async execute(input: Input) {
    const user = await this.userService.create({ email: input.email, password: input.password });
    return CreateResponse.ok(user);
  }
}
