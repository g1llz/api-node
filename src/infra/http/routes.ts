import { Application } from 'express';

import AuthController from '../../presentation/controllers/auth';
import UserController from '../../presentation/controllers/user';
import TodoController from '../../presentation/controllers/todo';

import authGuard from './auth-guard';

export class Router {
  constructor(private readonly server: Application) {}

  setup() {
    // auth
    this.server.post('/v1/login', AuthController.login);

    // user
    this.server.get('/user/:id', [UserController.show, authGuard]);
    this.server.put('/user/:id', [UserController.update, authGuard]);
    this.server.post('/user', UserController.store);

    // todo
    this.server.get('/todo', [TodoController.index, authGuard]);
    this.server.get('/todo/:id', [TodoController.show, authGuard]);
    this.server.put('/todo/:id', [TodoController.update, authGuard]);
    this.server.post('/todo', [TodoController.store, authGuard]);
  }
}
