import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';

type Input = Record<string, unknown> & {};

export class AuthController implements Controller {
  constructor() {}

  async execute(input: Input) {
    return CreateResponse.ok();
  }
}
