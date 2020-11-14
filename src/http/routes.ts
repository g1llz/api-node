import { Application } from 'express';

export default function routes(server: Application) {
  server.post(`${process.env.URI}/auth`, async (req, res, next) => {
    const { email, password } = req.body;
    try {
      // res.json(await db.auth.authenticate(email, password));
      res.json({ success: true });
    } catch (error) {
      res.json(error);
    }
  });

  server.get(`${process.env.URI}/users`, async (req, res, next) => {
    try {
      // res.json(await db.user.all());
      res.json({ success: true });
    } catch (error) {
      res.json(error);
    }
  });

  server.post(`${process.env.URI}/admin/users`, async (req, res, next) => {
    const { email, password } = req.body;
    try {
      // res.json(await db.user.save(email, password));
      res.json({ success: true });
    } catch (error) {
      res.json(error);
    }
  });

  server.get(`${process.env.URI}/users/:id`, async (req, res, next) => {
    const { id } = req.params;
    try {
      // res.json(await db.user.byId(id));
      res.json({ success: true });
    } catch (error) {
      res.json(error);
    }
  });
};
