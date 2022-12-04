import { Request, Response } from 'express';
import { CreateResponse } from '../../infra/adapters/CreateResponse';

export default {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      // auth logic here
      return CreateResponse.ok();
    } catch (error) {
      return res.json(error);
    }
  },
};
