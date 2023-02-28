import express, { Application } from 'express';
import cors from 'cors';

import { Router } from '../http/routes';

export class Server {
  private server: Application;

  constructor() {
    this.server = express();
  }

  build() {
    this.server.use(cors());
    this.server.use(express.json());

    new Router(this.server).setup();

    // this.server.use(new ErrorHandler().execute);

    return this;
  }

  listen() {
    this.server.listen(process.env.PORT || 3000, () => console.log('⚡Server is running!'));
  }

  get() {
    return this.server;
  }
}
