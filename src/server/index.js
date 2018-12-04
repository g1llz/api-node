const restify = require('restify');
const routes = require('../http/routes');
const cors = require('./cors');
const authGuard = require('../http/authGuard');

const server = restify.createServer();

const exclusions = ['/auth', '/auth/register', '/plans'];

server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser());
server.use(authGuard({ exclusions }));

routes(server);

module.exports = server;
