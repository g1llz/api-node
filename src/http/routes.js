const db = require('../services/mysql');

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

    server.get('/plans', async (req, res, next) => {
        try {
            res.send(await db.plans().all());
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('/plan', async (req, res, next) => {
        const { name, amountPerPayment, reference } = req.body;
        try {
            res.send(await db.plans().save(name, amountPerPayment, reference));
        } catch (error) {
            res.send(error);
        }
        next();
    });
};

module.exports = routes;
