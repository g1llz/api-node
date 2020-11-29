import { Application } from 'express';

import AuthController from '../controllers/auth';
import UserController from '../controllers/user';
import TodoController from '../controllers/todo';

import authGuard from './auth-guard';

export default function routes(server: Application) {
    // auth
    server.post('/v1/login', AuthController.login);
    
    // user
    server.get('/user/:id', [UserController.show, authGuard]);
    server.put('/user/:id', [UserController.update, authGuard]);
    server.post('/user', UserController.store);

    // todo
    server.get('/todo', [TodoController.index, authGuard]);
    server.get('/todo/:id', [TodoController.show, authGuard]);
    server.put('/todo/:id', [TodoController.update, authGuard]);
    server.post('/todo', [TodoController.store, authGuard]);
};
