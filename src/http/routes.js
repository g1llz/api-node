const db = require('../services/mysql');
const pg = require('../services/payments');

const routes = (server) => {
    server.get('/', (req, res, next) => {
        res.send('silence is gold.');
        next();
    });

    server.post('/auth', async (req, res, next) => {
        const { email, password } = req.body;
        try {
            res.send(await db.auth().authenticate(email, password));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('/auth/start-payment', async (req, res, next) => {
        try {
            res.send(await pg.options().start());
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.get('/plans', async (req, res, next) => {
        try {
            res.send(await db.plans().all());
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('/plan/create', async (req, res, next) => {
        const { plan } = req.body;
        try {
            res.send(await db.plans().save(plan));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('/plan/assign', async (req, res, next) => {
        const { customer } = req.body;
        try {
            res.send(await pg.options().assign(customer));
        } catch (error) {
            res.send(error);
        }
        next();
    });
};

module.exports = routes;
