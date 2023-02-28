import { Application } from 'express';

import { API } from '../../config/api';
import { ExpressAdapter } from '../adapters/ExpressAdapter';

import { AuthFactory } from '../factories/AuthFactory';
import { ProfileLoadFactory } from '../factories/ProfileLoadFactory';
import { ProfileUpdateFactory } from '../factories/ProfileUpdateFactory';
import { UserCreateFactory } from '../factories/UserCreateFactory';
import { UserPasswordFactory } from '../factories/UserPasswordFactory';
import { UserRoleFactory } from '../factories/UserRoleFactory';

const {
  resources: { auth: AUTH, user: USER, profile: PROFILE },
} = API.v1;

export class Router {
  constructor(private server: Application) {}

  setup() {
    // auth
    this.server.post(AUTH, new ExpressAdapter(AuthFactory.create()).adapt);

    // user
    this.server.post(USER, new ExpressAdapter(UserCreateFactory.create()).adapt);

    this.server.put(
      `${USER}/password/:userId`,
      new ExpressAdapter(UserPasswordFactory.create()).adapt,
    );

    this.server.put(`${USER}/role/:userId`, new ExpressAdapter(UserRoleFactory.create()).adapt);

    // profile
    this.server.get(`${PROFILE}/:profileId`, new ExpressAdapter(ProfileLoadFactory.create()).adapt);

    this.server.put(
      `${PROFILE}/:profileId`,
      new ExpressAdapter(ProfileUpdateFactory.create()).adapt,
    );
  }
}
