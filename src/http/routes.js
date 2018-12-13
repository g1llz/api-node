const db = require('../services/mysql');
const URI = '/api/v1';

const routes = (server) => {
    server.post(`${URI}/auth`, async (req, res, next) => {
        const { email, password } = req.body;
        try {
            res.send(await db.auth().authenticate(email, password));
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.get(`${URI}/users`, async (req, res, next) => {
        try {
            res.send(await db.users().all());
        } catch (error) {
            res.send(error);
        }
    });

    server.post(`${URI}/users`, async (req, res, next) => {
        const { email, password } = req.body;
        try {
            res.send(await db.users().save(email, password));
        } catch (error) {
            res.send(error);
        }
    });

    server.get(`${URI}/users/:id`, async (req, res, next) => {
        const { id } = req.params;
        try {
            res.send(await db.users().byId(id));
        } catch (error) {
            res.send(error);
        }
    });

    server.get(URI, (req, res, next) => {
        res.send('silence is gold.');
        next();
    });
};

module.exports = routes;
