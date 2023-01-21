import { Application } from 'express';
import { API } from '../../config/api';

import { AuthController } from '../../presentation/controllers/AuthController';
import { UserUpdateController } from '../../presentation/controllers/UserUpdateController';
import { UserCreateController } from '../../presentation/controllers/UserCreateController';
import { UserLoadController } from '../../presentation/controllers/UserLoadController';
import { ExpressAdapter } from '../adapters/ExpressAdapter';

import authGuard from './auth-guard';

const {
  resources: { auth: AUTH, user: USER },
} = API.v1;

export class Router {
  constructor(private readonly server: Application) {}

  setup() {
    // auth
    this.server.post(AUTH, new ExpressAdapter(new AuthController()).adapt);

    // user
    this.server.post(USER, new ExpressAdapter(new UserCreateController()).adapt);
    this.server.get(`${USER}/:userId`, new ExpressAdapter(new UserLoadController()).adapt);
    this.server.put(`${USER}/:userId`, new ExpressAdapter(new UserUpdateController()).adapt);
  }
}
