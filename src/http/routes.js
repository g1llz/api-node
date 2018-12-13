const db = require('../services/mysql');

const routes = (server) => {
    server.post('/auth', async (req, res, next) => {
        const { email, password } = req.body;
        try {
            res.send(await db.auth().authenticate(email, password));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.get('/users', async (req, res, next) => {
        try {
            res.send(await db.users().all());
        } catch (error) {
            res.send(error);
        }
    });

    server.post('/users', async (req, res, next) => {
        const { email, password } = req.body;
        try {
            res.send(await db.users().save(email, password));
        } catch (error) {
            res.send(error);
        }
    });

    server.get('/users/:id', async (req, res, next) => {
        const { id } = req.params;
        try {
            res.send(await db.users().byId(id));
        } catch (error) {
            res.send(error);
        }
    });

    server.get('/', (req, res, next) => {
        res.send('silence is gold.');
        next();
    });
};

module.exports = routes;
