import './config/env';
import server from './server';

server.listen(process.env.PORT);
