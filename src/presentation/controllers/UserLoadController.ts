import { UserService } from '../../services/UserService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

type Input = Record<string, unknown> & {
  userId: string;
};

export class UserLoadController implements Controller {
  constructor(private readonly userService: UserService) {}

  async execute(input: Input) {
    const user = await this.userService.loadById(input.userId);

    if (!user) return CreateResponse.notFound();
    return CreateResponse.ok(user);
  }
}
