const db = require('../services/mysql');

const routes = (server) => {
    server.get('/', (req, res, next) => {
        res.send('silence is gold.');
        next();
    });

    server.get('/customer', async (req, res, next) => {
        try {
            res.send(await db.products().all());
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('/customer', async (req, res, next) => {
        const { code, name, desc, price } = req.params;
        try {
            res.send(await db.products().save(code, name, desc, price));
        } catch (error) {
            res.send(error);
        }
        next();
    });
};

module.exports = routes;
