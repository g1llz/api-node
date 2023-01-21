import { PrismaClient } from '@prisma/client';
import { Application } from 'express';

import { API } from '../../config/api';
import { AuthController } from '../../presentation/controllers/AuthController';
import { UserUpdateController } from '../../presentation/controllers/UserUpdateController';
import { UserCreateController } from '../../presentation/controllers/UserCreateController';
import { UserLoadController } from '../../presentation/controllers/UserLoadController';
import { ExpressAdapter } from '../adapters/ExpressAdapter';

import authGuard from './auth-guard';

import { UserService } from '../../services/UserService';
import { UserLoader } from '../../repositories/prisma/user/UserLoader';
import { UserCreator } from '../../repositories/prisma/user/UserCreator';
import { UserUpdater } from '../../repositories/prisma/user/UserUpdater';

const {
  resources: { auth: AUTH, user: USER },
} = API.v1;

export class Router {
  private readonly prisma: PrismaClient;

  constructor(private readonly server: Application) {
    this.prisma = new PrismaClient();
  }

  setup() {
    // auth
    this.server.post(AUTH, new ExpressAdapter(new AuthController()).adapt);

    // user
    const userService = new UserService(
      new UserLoader(this.prisma),
      new UserCreator(this.prisma),
      new UserUpdater(this.prisma),
    );

    this.server.post(USER, new ExpressAdapter(new UserCreateController(userService)).adapt);

    this.server.get(
      `${USER}/:userId`,
      new ExpressAdapter(new UserLoadController(userService)).adapt,
    );

    this.server.put(
      `${USER}/:userId`,
      new ExpressAdapter(new UserUpdateController(userService)).adapt,
    );
  }
}
