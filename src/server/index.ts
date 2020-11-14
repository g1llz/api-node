import express from 'express';
import cors from 'cors';

import routes from '../http/routes';
import authGuard from '../http/authGuard';

const server = express();

const exclusions = [
  `${process.env.URI}/auth`
];

server.use(cors());
server.use(express.json());
server.use(authGuard({ exclusions }));

routes(server);

export default server;
