const db = require('../services/mysql');

const routes = (server) => {
  server.post(`${process.env.URI}/auth`, async (req, res, next) => {
    const { email, password } = req.body;
    try {
      res.json(await db.auth.authenticate(email, password));
    } catch (error) {
      res.json(error);
    }
    next();
  });

  server.get(`${process.env.URI}/users`, async (req, res, next) => {
    try {
      res.json(await db.user.all());
    } catch (error) {
      res.json(error);
    }
    next();
  });

  server.post(`${process.env.URI}/admin/users`, async (req, res, next) => {
    const { email, password } = req.body;
    try {
      res.json(await db.user.save(email, password));
    } catch (error) {
      res.json(error);
    }
    next();
  });

  server.get(`${process.env.URI}/users/:id`, async (req, res, next) => {
    const { id } = req.params;
    try {
      res.json(await db.user.byId(id));
    } catch (error) {
      res.json(error);
    }
    next();
  });
};

module.exports = routes;
