import './config/env';
import { Server } from './infra/server';

const server = new Server();
server.build().listen();
