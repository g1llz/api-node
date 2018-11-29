const db = require('../services/mysql');

const routes = (server) => {
    server.get('/', (req, res, next) => {
        res.send('silence is gold.');
        next();
    });

    server.get('/product', async (req, res, next) => {
        try {
            res.send(await db.products().all());
        } catch (error) {
            res.send(error);
        }
        next();
    });

    server.post('/product', async (req, res, next) => {
        const { name, amountPerPayment, reference } = req.body;
        try {
            res.send(await db.products().save(name, amountPerPayment, reference));
        } catch (error) {
            res.send(error);
        }
        next();
    });
};

module.exports = routes;
