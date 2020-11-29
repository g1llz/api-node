import express from 'express';
import cors from 'cors';

import routes from '../http/routes';

const server = express();

server.use(cors());
server.use(express.json());

routes(server);

export default server;
