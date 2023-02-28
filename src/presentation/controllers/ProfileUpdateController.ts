import { CreateResponse } from '../../infra/adapters/CreateResponse';
import { Controller } from '../../infra/adapters/interfaces';
import { ProfileService } from '../../services/ProfileService';

export type UpdateProfile = Record<string, unknown> & {
  profileId: string;
  name?: string;
  document?: string;
  phone?: string;
};

export class ProfileUpdateController implements Controller {
  constructor(private service: ProfileService) {}

  async execute(input: UpdateProfile) {
    const { profileId, ...rest } = input;

    const profile = await this.service.update({ profileId, ...this.normalizeInput(rest) });
    return CreateResponse.ok(profile);
  }

  private normalizeInput(input: Omit<UpdateProfile, 'profileId'>) {
    const mappedInput = new Map(Object.entries(input));

    for (const [key, value] of mappedInput) {
      if (!value) mappedInput.delete(key);
    }

    return Object.fromEntries(mappedInput);
  }
}
