import { UserService } from '../../services/UserService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

type Input = Record<string, unknown> & {
  name: string;
  email: string;
  password: string;
};

export class UserCreateController implements Controller {
  constructor(private readonly userService: UserService) {}

  async execute(input: Input) {
    const user = await this.userService.create({
      name: input.name,
      email: input.email,
      password: input.password,
    });
    
    return CreateResponse.created(user);
  }
}
