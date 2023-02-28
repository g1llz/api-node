import { AuthService } from '../../services/AuthService';
import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

type Input = Record<string, unknown> & {
  email: string;
  password: string;
};

export class AuthController implements Controller {
  constructor(private service: AuthService) {}

  async execute(input: Input) {
    const user = await this.service.loadUserByEmail(input.email);
    return CreateResponse.ok();
  }
}
