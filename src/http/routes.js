const db = require('../services/mysql');
const pg = require('../services/payments');

const routes = (server) => {
    // public routes
    server.post('/auth', async (req, res, next) => {
        const { email, password } = req.body;
        try {
            res.send(await db.auth().authenticate(email, password));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('/auth/register', async (req, res, next) => {
        const { email, password } = req.body;
        try {
            res.send(await db.users().save(email, password));
        } catch (error) {
            res.send(error);
        }
    })

    server.get('/plans', async (req, res, next) => {
        try {
            res.send(await db.plans().all());
        } catch (error) {
            res.send(error);
        }
        next();
    });

    // protected routes
    server.post('/admin/plan/create', async (req, res, next) => {
        const { plan } = req.body;
        try {
            res.send(await db.plans().save(plan));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('/start-payment', async (req, res, next) => {
        try {
            res.send(await pg.options().start());
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

    server.get('/', (req, res, next) => {
        res.send('silence is gold.');
        next();
    });
};

module.exports = routes;
