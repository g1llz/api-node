import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';
import { ProfileService } from '../../services/ProfileService';

type Input = Record<string, unknown> & {
  profileId: string;
};

export class ProfileLoadController implements Controller {
  constructor(private service: ProfileService) {}

  async execute(input: Input) {
    const profile = await this.service.loadById(input.profileId);

    if (!profile) return CreateResponse.notFound(`profile ${input.profileId} not found`);
    return CreateResponse.ok(profile);
  }
}
